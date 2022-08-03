import { renderHook } from '@testing-library/react';

import { usePagination } from '@/hooks/usePagination';

describe('usePagination', () => {
  test('should have proper page numbers', () => {
    const { result } = renderHook(() => usePagination(1, 10));
    expect(result.current).toStrictEqual(['1', '2', '3', '4', '5', '...', '10']);
  });
  test('should have proper page numbers', () => {
    const { result } = renderHook(() => usePagination(8, 10));
    expect(result.current).toStrictEqual(['1', '...', '4', '...', '8', '9', '10']);
  });
  test('should have proper page numbers', () => {
    const { result } = renderHook(() => usePagination(30, 50));
    expect(result.current).toStrictEqual(['1', '...', '29', '30', '31', '...', '50']);
  });
});
