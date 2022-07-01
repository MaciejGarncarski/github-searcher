import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '../components/atoms/Input';

describe('<Input />', () => {
  test('handles search', async () => {
    render(<Input setSearchedValue={jest.fn()} />);
    const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
    userEvent.type(input, 'Michael Jackson');
    await waitFor(() => expect(input.value).toBe('Michael Jackson'), {
      timeout: 1000,
    });
  });
});
