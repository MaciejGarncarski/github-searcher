import { render, screen } from '@testing-library/react';

import { Text } from '../components/atoms/Text';

const sampleText = 'Hello';

const expectText = (text: string) => expect(screen.getByText(text)).toBeInTheDocument();

describe('<Text />', () => {
  test('Should render empty Text', () => {
    render(<Text> </Text>);
  });
  test('Should render Text with text', () => {
    render(<Text>{sampleText}</Text>);
    expectText(sampleText);
  });
  test('Should render Text with type h5', () => {
    render(<Text type='h5'>{sampleText}</Text>);
  });
});
