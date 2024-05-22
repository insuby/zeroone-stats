import './styles.scss';
import { HeaderAccount, HeaderMenu } from './ui';

export const Header = () => {
  return (
    <header className='header'>
      <div className="header__logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <HeaderMenu />
      <HeaderAccount />
    </header>
  );
};