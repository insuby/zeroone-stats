import './styles.scss';
import { ButtonColored, ButtonDark } from 'shared/ui';
import { cx } from '@emotion/css';
import { useState } from 'react';

type AccountDeleteModalProps = {
  isOpen: boolean
  type: 'success' | 'failure' | 'confirm' | 'delete'
  onClose: () => void
}

export const AccountModal = ({ isOpen, type, onClose }: AccountDeleteModalProps) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const onConfirm = () => {
    setIsConfirmed(true);
  };

  return (
    <div className={cx('account-modal-wrapper', { open: isOpen })}>
      <div className="account-modal-bg" />
      <div className="account-modal">
        <div className="account-modal__header">
          <button className="account-modal__btn-close" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M15.625 4.375L4.375 15.625" stroke="#252525" strokeWidth="1.5" strokeLinecap="square"
                      strokeLinejoin="round" />
                <path d="M15.625 15.625L4.375 4.375" stroke="#252525" strokeWidth="1.5" strokeLinecap="square"
                      strokeLinejoin="round" />
              </g>
            </svg>
          </button>
        </div>
        {
          type === 'success' || isConfirmed
            ? <AccountSuccessModal />
            : type === 'confirm'
              ? <AccountConfirmModal onClose={onClose} onConfirm={onConfirm} />
              : <AccountDeleteModal onClose={onClose} />
        }
      </div>
    </div>
  );
};

const AccountSuccessModal = () => {
  return (
    <>
      <div className="account-modal__icon account-modal__icon_success">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 9L13 23L6 16" stroke="white" strokeWidth="3" strokeLinecap="square"
                strokeLinejoin="round" />
        </svg>
      </div>
      <div className="account-modal__heading">
        <div className="account-modal__main-text">Успех!</div>
        <div className="account-modal__sub-text">Измененные данные успешно сохранены.</div>
      </div>
    </>
  );
};

const AccountConfirmModal = ({ onClose, onConfirm }: {
  onClose: AccountDeleteModalProps['onClose'],
  onConfirm: () => void
}) => {
  return (
    <>
      <div className="account-modal__icon account-modal__icon_warning">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 13V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M14.2748 4.99995L3.27479 24C3.09955 24.3035 3.00715 24.6477 3.00684 24.9982C3.00653 25.3487 3.09832 25.6931 3.27302 25.9969C3.44773 26.3007 3.6992 26.5533 4.00226 26.7294C4.30532 26.9054 4.64932 26.9987 4.99979 27H26.9998C27.3503 26.9987 27.6943 26.9054 27.9973 26.7294C28.3004 26.5533 28.5519 26.3007 28.7266 25.9969C28.9013 25.6931 28.9931 25.3487 28.9927 24.9982C28.9924 24.6477 28.9 24.3035 28.7248 24L17.7248 4.99995C17.5509 4.69603 17.2997 4.44346 16.9968 4.26781C16.6939 4.09215 16.35 3.99963 15.9998 3.99963C15.6496 3.99963 15.3057 4.09215 15.0028 4.26781C14.6998 4.44346 14.4487 4.69603 14.2748 4.99995V4.99995Z"
            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M16.25 22.5C16.25 22.6381 16.1381 22.75 16 22.75C15.8619 22.75 15.75 22.6381 15.75 22.5C15.75 22.3619 15.8619 22.25 16 22.25C16.1381 22.25 16.25 22.3619 16.25 22.5Z"
            fill="white" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="account-modal__heading">
        <div className="account-modal__main-text">Вы уверены?</div>
        <div className="account-modal__sub-text">Что хотите изменить данные?</div>
      </div>
      <div className="account-modal__actions">
        <ButtonColored className="actions__button actions__button_remove" text="Продолжить" onClick={onConfirm} />
        <ButtonDark className="actions__button actions__button_cancel" text="Отмена" onClick={onClose} />
      </div>
    </>
  );
};

const AccountDeleteModal = ({ onClose }: { onClose: AccountDeleteModalProps['onClose'] }) => {
  return (
    <>
      <div className="account-modal__icon account-modal__icon_danger">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 13V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M14.2748 4.99995L3.27479 24C3.09955 24.3035 3.00715 24.6477 3.00684 24.9982C3.00653 25.3487 3.09832 25.6931 3.27302 25.9969C3.44773 26.3007 3.6992 26.5533 4.00226 26.7294C4.30532 26.9054 4.64932 26.9987 4.99979 27H26.9998C27.3503 26.9987 27.6943 26.9054 27.9973 26.7294C28.3004 26.5533 28.5519 26.3007 28.7266 25.9969C28.9013 25.6931 28.9931 25.3487 28.9927 24.9982C28.9924 24.6477 28.9 24.3035 28.7248 24L17.7248 4.99995C17.5509 4.69603 17.2997 4.44346 16.9968 4.26781C16.6939 4.09215 16.35 3.99963 15.9998 3.99963C15.6496 3.99963 15.3057 4.09215 15.0028 4.26781C14.6998 4.44346 14.4487 4.69603 14.2748 4.99995V4.99995Z"
            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M16.25 22.5C16.25 22.6381 16.1381 22.75 16 22.75C15.8619 22.75 15.75 22.6381 15.75 22.5C15.75 22.3619 15.8619 22.25 16 22.25C16.1381 22.25 16.25 22.3619 16.25 22.5Z"
            fill="white" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="account-modal__heading">
        <div className="account-modal__main-text">Вы уверены, что хотите <br /> удалить аккаунт?</div>
        <div className="account-modal__sub-text">Восстановить данные будет невозможно</div>
      </div>
      <div className="account-modal__actions actions">
        <ButtonColored className="actions__button actions__button_remove" text="Удалить аккаунт" />
        <ButtonDark className="actions__button actions__button_cancel" text="Отмена" onClick={onClose} />
      </div>
    </>
  );
};