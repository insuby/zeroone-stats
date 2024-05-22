import './styles.scss';
import type { FunctionComponent, HTMLAttributes } from 'react';
import { cx } from '@emotion/css';
import { Spinner } from 'shared/ui';

type ButtonProps = {
  text?: string
  disabled?: boolean
} & HTMLAttributes<HTMLButtonElement>

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={cx('btn', props.className)}
      onClick={props.onClick}
    >
      {props.disabled && <Spinner size={30}/>}
      {!props.disabled && (props.text || props.children)}
    </button>
  );
};

export const ButtonColored: FunctionComponent<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={cx('btn_colored', props.className)}
    />
  );
};

export const ButtonDark: FunctionComponent<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={cx('btn_dark', props.className)}
    />
  );
};

export const ButtonEmpty: FunctionComponent<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={cx('btn_empty', props.className)}
    />
  );
};