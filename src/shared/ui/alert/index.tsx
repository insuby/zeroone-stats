import './styles.scss';
import type { FunctionComponent } from 'react';
import { Alert as BlueprintAlert, AlertProps } from '@blueprintjs/core';
import { cx } from '@emotion/css';

export const Alert: FunctionComponent<AlertProps & { text: string, success: boolean }> = (props) => {
  return (
    <BlueprintAlert
      {...props}
      canEscapeKeyCancel
      canOutsideClickCancel
      onClose={props.onClose}
    >
      <div className={cx('alert', {
        success: props.success,
      })}>
        <div className="alert__icon">
          {props.success
            ? (
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.3125 31.9375V0.0625H32.1875V31.9375H0.3125Z" stroke="white" strokeWidth="0.125" />
                <path d="M27.25 9L13.25 23L6.25 16" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" />
              </svg>
            )
            : (
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 10V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.45 19L16.25 16" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" />
                <path d="M23.2754 12.4624H28.2754V7.4624" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" />
                <path
                  d="M24.0255 23.775C22.4875 25.3143 20.5275 26.3628 18.3934 26.788C16.2594 27.2132 14.0472 26.9958 12.0367 26.1635C10.0262 25.3312 8.30769 23.9213 7.0986 22.1122C5.88951 20.3031 5.24414 18.176 5.24414 16C5.24414 13.824 5.88951 11.6969 7.0986 9.8878C8.30769 8.07866 10.0262 6.66877 12.0367 5.83647C14.0472 5.00417 16.2594 4.78686 18.3934 5.21202C20.5275 5.63719 22.4875 6.68573 24.0255 8.22501L28.2755 12.4625"
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
        </div>
        <div className="alert__text">{props.text}</div>
      </div>
    </BlueprintAlert>
  );
};
