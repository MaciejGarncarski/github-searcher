import { useRef } from 'react';

import { useToggleSettingsMenu } from '@/hooks/useToggleSettings';

import { SettingsToggleButton } from '@/components/atoms/buttons/SettingsToggleButton';
import { SettingsMenu } from '@/components/molecules/SettingsMenu';

export const Settings = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useToggleSettingsMenu(formRef, buttonRef);

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
