import { type FunctionComponent } from 'react';
import { useAuthContext, UserContext } from 'shared/hooks';
import { useQuery } from '@tanstack/react-query';
import { User } from 'typings/user';
import { Spinner } from 'shared/ui';
import { SITE_URL } from 'app/site-url';
import { fromWeiToEther } from 'shared/lib';

export const withUser = (Component: FunctionComponent) => () => {
  const { isAuth } = useAuthContext();
  const { data } = useQuery<User>({
    queryKey: ['user', isAuth],
    queryFn: () => fetch(`${SITE_URL}/user/`).then((res) => res.json()),
  });

  if (!data) return <Spinner />;

  return (
    <UserContext.Provider value={{
      ...data,
      balance: fromWeiToEther(data.balance),
    }}>
      <Component />
    </UserContext.Provider>
  );
};
