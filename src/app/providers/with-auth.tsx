import { type FunctionComponent, useState } from 'react';
import { AuthContext } from 'shared/hooks';
import Cookies from 'js-cookie';

export const withAuth = (Component: FunctionComponent) => () => {
  const [isAuth, setIsAuth] = useState(!!Cookies.get('isAuth'));

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <AuthContext.Provider value={{
      username,
      setUsername,
      email,
      setEmail,
      isAuth,
      setIsAuth,
    }}>
      <Component />
    </AuthContext.Provider>

  );
};
