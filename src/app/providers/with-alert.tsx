import { useState } from 'react';
import type { FunctionComponent } from 'react';
import { AlertContext } from 'shared/hooks';

export const withAlert = (Component: FunctionComponent) => () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [text, setText] = useState('');

  const onError = (text: string) => {
    setIsSuccess(false);
    setText(text);
    setIsOpen(true);
  };

  const onSuccess = (text: string) => {
    setIsSuccess(true)
    setText(text);
    setIsOpen(true);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        setText,
        isSuccess,
        setIsSuccess,
        isOpen,
        setIsOpen,
        onError,
        onSuccess
      }}>
      <Component />
    </AlertContext.Provider>

  );
};
