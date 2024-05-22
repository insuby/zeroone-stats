import './styles.scss';
import { ButtonColored, ButtonDark, InputWithLabel, Paper } from 'shared/ui';

export const ProfilePage = () => {
  return (
    <Paper className="profile">
      <div className="paper__header">
        <h2 className="paper__title">Настройки</h2>
      </div>
      <div className="paper__body">
        <form className="settings">
          <div className="settings__body">
            <div className="settings__avatar">
              <img src="/avatar.png" alt="user-avatar" />
            </div>
            <div className="settings__inputs">
              <InputWithLabel label="Ваш ник" placeholder="Ваш ник"/>
              <InputWithLabel label="E-mail" placeholder="E-mail"/>
              <InputWithLabel label="Аккаунт Steam" placeholder="Steam"/>
            </div>
            <div className="settings__inputs">
              <InputWithLabel type="password" label="Пароль" placeholder="Пароль" />
              <InputWithLabel type="password" label="Новый пароль" placeholder="Новый пароль" />
              <InputWithLabel type="password" label="Повторите новый пароль" placeholder="Повторите новый пароль" />
            </div>
          </div>
          <div className="settings__actions actions">
            <ButtonColored className="actions__button actions__button_remove" text="Удалить аккаунт" />
            <ButtonDark className="actions__button actions__button_cancel" text="Отмена"/>
            <ButtonColored className="actions__button" text="Сохранить" />
          </div>
        </form>
      </div>
    </Paper>
  );
};