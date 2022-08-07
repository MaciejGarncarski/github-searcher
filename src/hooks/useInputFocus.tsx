import { useEffect, useState } from 'react';

export const useInputFocus = () => {
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (clickEvent: MouseEvent) => {
      const clickedElement = clickEvent.target as HTMLElement;

      if (clickedElement.dataset.focus !== 'true') {
        setInputFocus(false);
      }
    };

    document.addEventListener('click', handleClick);

    const handleFocus = (focusEv: FocusEvent) => {
      const focusedElement = focusEv.target as HTMLElement;
      if (!focusedElement.dataset.focus) {
        setInputFocus(false);
      }

      if (focusedElement.dataset.focus === 'true') {
        setInputFocus(true);
      }
    };

    document.addEventListener('focusin', handleFocus);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return [inputFocus, setInputFocus] as const;
};
