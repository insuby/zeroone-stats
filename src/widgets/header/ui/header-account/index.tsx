import './styles.scss';
import { Link } from 'react-router-dom';
import { RoutesPath } from 'shared/routes-path';

export const HeaderAccount = () => {
  return (
    <Link to={RoutesPath.PROFILE} className="header__account account">
      <div className="account__avatar">
        <img src="/avatar.png" alt="avatar" />
      </div>
    </Link>
  );
};