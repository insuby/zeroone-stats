import './styles.scss'
import type { FunctionComponent, HTMLAttributes } from 'react';

export const ButtonClose: FunctionComponent<HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
}> = (props) => {
  return (
    <button className="btn btn__close" onClick={props.onClick} disabled={props.disabled}>
      <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 2L1.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
        <path d="M9.5 10L1.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
      </svg>
    </button>
  );
};