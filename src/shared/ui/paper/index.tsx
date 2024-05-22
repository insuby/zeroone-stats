import './styles.scss';
import type { FunctionComponent, HTMLAttributes } from 'react';
import { cx } from '@emotion/css';

export const Paper: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return (
    <div className={cx('paper', className)}>
      <div>
        {children}
      </div>
    </div>
  );
};
