import { act, renderHook } from '@testing-library/react';
import { render } from '@testing-library/react';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useThemeChange } from '@/hooks/useThemeChange';
import { mockWindow } from '@/utils/mockWindow';

import { Text } from '@/components/atoms/Text';

describe('Theme tests', () => {
  beforeAll(mockWindow);

  test('should have dark theme', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'dark'));

    renderHook(() => useThemeChange(result.current[0]));

    render(<Text>random text</Text>);

    const htmlTag = document.documentElement;

    expect(htmlTag).toHaveClass('dark');
  });

  test('hook should change theme', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'dark'));

    renderHook(() => useThemeChange(result.current[0]));

    const setTheme = result.current[1];

    act(() => setTheme('light'));

    renderHook(() => useThemeChange(result.current[0]));

    render(<Text>random text</Text>);

    const htmlTag = document.documentElement;

    expect(htmlTag).toHaveClass('light');
  });

  test('should detect theme', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'system'));
    renderHook(() => useThemeChange(result.current[0]));

    render(<Text>random text</Text>);

    const htmlTag = document.documentElement;

    expect(htmlTag).toHaveClass('light');
  });
});
