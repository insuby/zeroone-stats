import { ButtonColored, ButtonDark, InputWithLabel } from 'shared/ui';
import { FunctionComponent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postData } from 'shared/lib';
import { SITE_URL } from 'app/site-url';
import { useAlertContext, useAuthContext } from 'shared/hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { SignInData, SignInProps, SignInResponse } from '../model/types';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useForm } from 'react-hook-form';
import { RoutesPath } from 'shared/routes-path';
import { ru } from 'yup-locales';
import Cookies from 'js-cookie';

yup.setLocale(ru);

const schema = yup.object({
  login: yup.string().lowercase().trim().min(4).max(10).required(),
  password: yup.string().trim().min(8).required(),
});

export const SignIn: FunctionComponent<SignInProps> = (
  { onSignIn },
) => {
  const [searchParams] = useSearchParams(location.search);
  const { setIsAuth } = useAuthContext();
  const { onError } = useAlertContext();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const signInMutation = useMutation<SignInResponse & { access: string, refresh: string }, Error, SignInData>({
    mutationFn: (data) => postData(SITE_URL + '/signin/', data),
    onSuccess: async (data) => {
      if (data.code === 200) {
        const redirect_url = searchParams.get('redirect_url');
        if (redirect_url) {
          const { sso_id } = await fetch(SITE_URL + '/set/connect/desktop/').then(r => r.json());
          // @ts-ignore
          window.open(redirect_url + '?sso_id=' + sso_id, '_blank').focus();
          return;
        }
        setIsAuth(true);
        Cookies.set('isAuth', 'true');
        navigate(RoutesPath.PROFILE);
        return;
      }
      data.message && onError(data.message);
    },
    onError: (error) => {
      console.error('Sign in error:', error);
      onError('Не удалось войти. Пожалуйста, попробуйте позже');
    },
  });

  const redirect_url = searchParams.get('redirect_url');

  const onSubmit = async (data: SignInData) => {
    Cookies.remove('isAuth');
    await fetch(SITE_URL + '/logout/');
    if (redirect_url) {
      signInMutation.mutate({ ...data, desktop: true });
      return;
    }
    signInMutation.mutate(data);
  };

  return (
    <form className="auth-form animate__animated animate__fadeIn" onSubmit={handleSubmit(onSubmit)}>
      <div className="auth-form__header form-header">
        <p className="form-header__header">Войти</p>
      </div>
      <div className="auth-form__body form-body">
        <InputWithLabel
          {...register('login')}
          label="Логин"
          placeholder="Введите данные"
          defaultValue={'otto'}
        />
        <InputWithLabel
          {...register('password')}
          type="password"
          label="Пароль"
          placeholder="Введите данные"
          defaultValue={12345678}
        />
        <span className="form-body__forgot-password">Забыл пароль</span>
        {errors && Object.values(errors).map(({ message }) => <span className="auth-form__error">{message}</span>)}
      </div>
      <div className="auth-form__footer form-actions">
        <ButtonColored text="Войти" disabled={signInMutation.isPending} />
        <ButtonDark text="Регистрация" onClick={onSignIn} />
      </div>
    </form>
  );
};