import { RefObject, useEffect, useState } from 'react';

export const useToggleSettingsMenu = (
  formRef: RefObject<HTMLDivElement>,
  buttonRef: RefObject<HTMLButtonElement>
) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClick = (clickEvent: MouseEvent) => {
      const eventTarget = clickEvent.target as HTMLButtonElement | HTMLFormElement;

      if (formRef.current && !formRef.current.contains(eventTarget)) {
        setIsOpen(false);
      }
      if (buttonRef.current && buttonRef.current.contains(eventTarget)) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [buttonRef, formRef, isOpen]);

  return [isOpen, setIsOpen] as const;
};
