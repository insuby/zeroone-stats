import './styles.scss';
import type { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { forwardRef } from 'react';
import { cx } from '@emotion/css';

export type InputProps = {
  label?: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  disabled?: boolean
} & HTMLAttributes<HTMLInputElement>

export const InputWithLabel = forwardRef<HTMLInputElement, InputProps>(
  ({
     className,
     disabled,
     label,
     ...rest
   }, ref) => {
    return (
      <div className={cx('input-with-label', className, {
        disabled: disabled,
      })}>
        <label htmlFor={rest.id}>{label}</label>
        <input
          ref={ref}
          {...rest}
          id={rest.id}
          type={rest.type ?? 'text'}
          placeholder={rest.placeholder}
          defaultValue={rest.defaultValue}
          onChange={rest.onChange}
          disabled={disabled}
        />
      </div>
    );
  });

InputWithLabel.displayName = 'InputWithLabel';
