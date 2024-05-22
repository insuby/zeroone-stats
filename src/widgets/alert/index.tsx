import { useAlertContext } from 'shared/hooks';
import { Alert as SimpleAlert } from 'shared/ui';

export const Alert =  () => {
  const { isOpen, setIsOpen, isSuccess, text } = useAlertContext();

  return (
    <SimpleAlert text={text} isOpen={isOpen} onClose={() => setIsOpen(false)} success={isSuccess} />
  );
};
