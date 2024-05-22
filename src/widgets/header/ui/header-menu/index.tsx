import './styles.scss';
import { cx } from '@emotion/css';
import { Link, useLocation } from 'react-router-dom';
import { RoutesPath } from 'shared/routes-path';

export const HeaderMenu = () => {
  const { pathname } = useLocation();

  return (
    <div className="header__menu">
      <ul className="menu">
        <Link className={cx('menu__item item', {
          active: pathname === RoutesPath.STATS,
        })} to={RoutesPath.STATS}>
          <span className="item__title">Моя статистика</span>
        </Link>
        <Link className={cx('menu__item item', {
          active: pathname === RoutesPath.RATING,
        })} to={RoutesPath.RATING}>
          <span className="item__title">Рейтинг игроков</span>
        </Link>
        <Link className={cx('menu__item item', {
          active: pathname === RoutesPath.PROFILE,
        })} to={RoutesPath.PROFILE}>
          <span className="item__title">Настройки</span>
        </Link>
      </ul>
    </div>
  );
};