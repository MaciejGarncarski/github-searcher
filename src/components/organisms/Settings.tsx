import { useEffect, useState } from 'react';
import { useRef } from 'react';

import { SettingsToggleButton } from '@/components/atoms/buttons/SettingsToggleButton';
import { SettingsMenu } from '@/components/molecules/SettingsMenu';

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
  }, [isOpen]);

  return (
    <div
      className='col-span-2 row-start-1 flex items-end justify-self-end lg:relative'
      ref={formRef}
    >
      <SettingsToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <SettingsMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};
