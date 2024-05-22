import { createContext, useContext } from 'react';
import type { User } from 'typings/user';

type UserContextProps = User | null;

export const UserContext = createContext<UserContextProps>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('UserContext API Error');
  }

  return context;
};
