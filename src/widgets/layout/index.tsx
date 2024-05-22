import { Fragment, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'shared/hooks';
import { Header } from 'widgets';
import { RoutesPath } from 'shared/routes-path';

export const Layout = () => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(RoutesPath.AUTH);
    }
  }, [isAuth]);


  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};