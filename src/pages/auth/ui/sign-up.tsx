import { ButtonClose, ButtonColored, ButtonDark, InputWithLabel } from 'shared/ui';
import type { FunctionComponent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postData } from 'shared/lib';
import { SITE_URL } from 'app/site-url';
import { useAlertContext, useAuthContext } from 'shared/hooks';
import type { ConfirmCodeResponse, SignUpData, SignUpResponse } from '../model/types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { ru } from 'yup-locales';

yup.setLocale(ru);

const schema = yup.object({
  username: yup.string().lowercase().trim().min(4).max(10).required(),
  email: yup.string().lowercase().trim().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().min(8).required(),
});

export const SignUp: FunctionComponent<{ onGoBack: () => void }> = ({ onGoBack }) => {
  const { setEmail, setUsername } = useAuthContext();
  const { onError } = useAlertContext();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const signUpMutation = useMutation<SignUpResponse, Error, SignUpData>({
    mutationFn: (data) => postData(SITE_URL + '/signup/', data),
    onSuccess: (data) => {
      if (data.code === 201) {
        const { username } = signUpMutation.variables as SignUpData;
        setUsername(username);
        confirmCodeMutation.mutate(username);
        return;
      }
      data.message && onError(data.message);
    },
    onError: (error) => {
      console.error('Sign up error:', error);
      onError('Не удалось зарегистрироваться. Пожалуйста, попробуйте позже.');
    },
  });

  const confirmCodeMutation = useMutation<ConfirmCodeResponse, Error, string>({
    mutationFn: (username) => fetch(SITE_URL + '/confirm/email/?login=' + username).then(r => r.json()),
    onSuccess: (data) => {
      if (data.code === 201) {
        setEmail(data.email);
        return;
      }
      onError(data.message as string);
    },
    onError: (error) => {
      console.error('Sign up error:', error);
      onError('Не удалось зарегистрироваться. Пожалуйста, попробуйте позже.');
    },
  });

  const onSubmit = (data: SignUpData) => {
    if (data.password !== data.confirmPassword) {
      onError('пароли не совпадают');
      return;
    }
    signUpMutation.mutate(data);
  };

  const onClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    onGoBack();
  };

  return (
    <form className="auth-form animate__animated animate__fadeIn" onSubmit={handleSubmit(onSubmit)}>
      <div className="auth-form__header form-header">
        <ButtonClose onClick={onClick} />
        <p className="form-header__header">Регистрация</p>
      </div>
      <div className="auth-form__body form-body">
        <InputWithLabel {...register('email')} label="E-mail" type="email" placeholder="Введите данные"
                        defaultValue={'otto' + Math.ceil(Math.random() * 100) + '@gmail.com'} />
        <InputWithLabel {...register('username')} label="Ваш ник" placeholder="Введите данные"
                        defaultValue={'otto' + Math.ceil(Math.random() * 100)} />
        <InputWithLabel {...register('password')} label="Пароль" type="password" placeholder="Введите данные"
                        defaultValue={12345678} />
        <InputWithLabel {...register('confirmPassword')} label="Повторите пароль" type="password" placeholder="Введите данные"
                        defaultValue={12345678} />
        {errors && Object.values(errors).map(({ message }) => <span className="auth-form__error">{message}</span>)}
      </div>
      <div className="auth-form__footer form-actions">
        <ButtonColored text="Зарегистрироваться" />
        <ButtonDark text="Назад" onClick={onGoBack} />
      </div>
    </form>
  );
};