import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { mockRouter } from '@/lib/mockRouter';

import { ResultHeading } from '@/components/atoms/ResultHeading';

import { SettingsContext } from '@/contexts/settingsContext';

describe('useSettings', () => {
  test('color should match context color', () => {
    render(
      <RouterContext.Provider value={mockRouter({ query: { q: 'elo' } })}>
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
      </RouterContext.Provider>
    );

    expect(screen.getByText('typescript')).toHaveClass('text-red-400');
  });
  test('color should not match context color', () => {
    render(
      <RouterContext.Provider value={mockRouter({ query: { q: 'elo' } })}>
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
      </RouterContext.Provider>
    );

    expect(screen.getByText('typescript')).not.toHaveClass('text-red-400');
  });
});
