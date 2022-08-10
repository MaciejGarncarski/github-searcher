import { render, screen } from '@testing-library/react';

import { ResultHeading } from '@/components/atoms/ResultHeading';

import { SettingsContext } from '@/contexts/settingsContext';

describe('useSettings', () => {
  test('color should match context color', () => {
    render(
      <SettingsContext.Provider
        value={{
          accentColor: 'red',
          setAccentColor: jest.fn(),
          theme: 'system',
          setTheme: jest.fn(),
        }}
      >
        <ResultHeading href='#'>typescript</ResultHeading>
      </SettingsContext.Provider>
    );

    expect(screen.getByText('typescript')).toHaveClass('text-red-400');
  });
  test('color should not match context color', () => {
    render(
      <SettingsContext.Provider
        value={{
          accentColor: 'blue',
          setAccentColor: jest.fn(),
          theme: 'system',
          setTheme: jest.fn(),
        }}
      >
        <ResultHeading href='#'>typescript</ResultHeading>
      </SettingsContext.Provider>
    );

    expect(screen.getByText('typescript')).not.toHaveClass('text-red-400');
  });
});
