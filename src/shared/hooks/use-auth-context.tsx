import { createContext, useContext } from 'react';
import type { DispatchedStateAction } from 'shared/typings';

type AuthContextProps = {
  username: string
  setUsername: DispatchedStateAction<string>
  email: string
  setEmail: DispatchedStateAction<string>
  isAuth: boolean
  setIsAuth: DispatchedStateAction<boolean>
} | null;

export const AuthContext = createContext<AuthContextProps>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Context API Error');
  }

  return context;
};
