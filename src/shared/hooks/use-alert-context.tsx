import { createContext, useContext } from 'react';
import type { DispatchedStateAction } from 'shared/typings';

export type AlertContextProps = {
  text: string
  setText: DispatchedStateAction<string>
  isSuccess: boolean
  setIsSuccess: DispatchedStateAction<boolean>
  isOpen: boolean
  setIsOpen: DispatchedStateAction<boolean>
  onError: (text: string) => void
  onSuccess: (text: string) => void
} | null;

export const AlertContext = createContext<AlertContextProps>(null);

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('UseAlertContext API Error');
  }

  return context;
};
