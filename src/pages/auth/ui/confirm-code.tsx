import { ButtonClose, ButtonColored, ButtonDark, InputWithLabel } from 'shared/ui';
import type { FormEvent, FunctionComponent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postData } from 'shared/lib';
import { SITE_URL } from 'app/site-url';
import { useAlertContext, useAuthContext } from 'shared/hooks';
import { useNavigate } from 'react-router-dom';
import type { ConfirmCodeData, ConfirmCodeResponse } from '../model/types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { RoutesPath } from 'shared/routes-path';
import { ru } from 'yup-locales';

yup.setLocale(ru);

const schema = yup.object({
  code: yup.string().min(6).max(6).required(),
});

export const ConfirmCode: FunctionComponent<{ onGoBack: () => void }> = ({ onGoBack }) => {
  const { email, username } = useAuthContext();
  const { onError } = useAlertContext();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const resendCodeQuery = useMutation<ConfirmCodeResponse, Error>({
    mutationFn: () => fetch(SITE_URL + '/confirm/email/?login=' + username).then(r => r.json()),
    onSuccess: (data) => {
      if (data.code !== 200 && data.code !== 201 && data.code !== 204) {
        onError(data.message as string);
        return;
      }
    },
    onError: (error) => {
      console.error('Resend code error:', error);
      onError('Не удалось отправить код подтверждения. Пожалуйста, попробуйте позже.');
    },
  });

  const confirmCodeMutation = useMutation<ConfirmCodeResponse, Error, ConfirmCodeData>({
    mutationFn: (data) => postData(SITE_URL + '/confirm/email/', data),
    onSuccess: (data) => {
      if (data.code === 200) {
        navigate(RoutesPath.PROFILE);
        return;
      }
      data.message && onError(data.message);
    },
    onError: (error) => {
      console.error('Confirm code error:', error);
      onError('Не удалось подтвердить код. Пожалуйста, попробуйте позже.');
    },
  });
  const onSendCodeAgain = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    resendCodeQuery.mutate();
  };

  const onSubmit = (data: Pick<ConfirmCodeData, 'code'>) => {
    confirmCodeMutation.mutate({ login: username, code: data.code });
  };

  return (
    <form className="auth-form animate__animated animate__fadeIn" onSubmit={handleSubmit(onSubmit)}>
      <div className="auth-form__header form-header">
        <ButtonClose onClick={onGoBack} />
        <p className="form-header__header">Подтвердите почту</p>
        <div className="form-confirm-code">
          Вам был отправлен код на почту {email}, <br />
          введите полученный код в область внизу.
        </div>
      </div>
      <div className="auth-form__body form-body">
        <InputWithLabel {...register('code')} label="Введите код" placeholder={'Введите код'} />
        {errors && Object.values(errors).map(({ message }) => <span className="auth-form__error">{message}</span>)}
      </div>
      <div className="auth-form__footer form-actions">
        <ButtonColored text="Завершить регистрацию" />
        <ButtonDark text="Послать код повторно" onClick={onSendCodeAgain} />
        <ButtonDark text="Назад" onClick={onGoBack} />
      </div>
    </form>
  );
};