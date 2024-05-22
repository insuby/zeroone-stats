import './styles/main.scss';
import { ru } from 'date-fns/locale';
import { setDefaultOptions } from 'date-fns';
import { withProviders } from 'app/providers';
import { Alert, Layout } from 'widgets';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  AuthPage,
  ProfilePage,
  StatsPage,
  RatingPage
} from 'pages';
import { RoutesPath } from 'shared/routes-path';
import { withUser } from 'app/providers/with-user';

setDefaultOptions({ locale: ru });

export const App = withProviders(() => {
  return (
    <div className="app">
      <Pages />
      <Alert />
    </div>
  );
});

const Pages = withUser(() => {
  return (
    <Routes>
      <Route path={RoutesPath.AUTH} element={<AuthPage />} />
      <Route element={<Layout />}>
        <Route path={RoutesPath.PROFILE} element={<ProfilePage />} />
        <Route path={RoutesPath.STATS} element={<StatsPage />} />
        <Route path={RoutesPath.RATING} element={<RatingPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to={RoutesPath.PROFILE} />} />
    </Routes>
  );
});
