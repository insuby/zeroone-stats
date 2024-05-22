import './styles.scss';
import { Fragment, useCallback, useState } from 'react';
import { ConfirmCode, SignIn, SignUp } from './ui';
import { useAuthContext } from 'shared/hooks';


export const AuthPage = () => {
  const [shouldSignUp, setIsShouldSignUp] = useState(false);
  const { setEmail, email } = useAuthContext();

  const onSignIn = useCallback(() => {
    setIsShouldSignUp(true);
  }, []);

  const onGoBack = useCallback(() => {
    setIsShouldSignUp(false);
    setEmail('');
  }, []);

  return (
    <Fragment>
      {!shouldSignUp && (
        <SignIn onSignIn={onSignIn} />
      )}

      {(shouldSignUp && !email) && (
        <SignUp onGoBack={onGoBack} />
      )}

      {email && (
        <ConfirmCode onGoBack={onGoBack} />
      )}
    </Fragment>
  );
};