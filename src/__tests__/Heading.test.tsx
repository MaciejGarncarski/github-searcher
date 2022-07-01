import { render, screen } from '@testing-library/react';

import { Heading } from '../components/atoms/Heading';

const sampleText = 'Hello';

const expectText = (text: string) =>
  expect(screen.getByText(text)).toBeInTheDocument();

describe('<Heading />', () => {
  test('Should render empty Heading', () => {
    render(<Heading> </Heading>);
  });
  test('Should render Heading with text', () => {
    render(<Heading>{sampleText}</Heading>);
    expectText(sampleText);
  });
  test('Should render Heading with type h5', () => {
    render(<Heading type='h5'>{sampleText}</Heading>);
  });
  test('Should render Heading with className', () => {
    render(<Heading className='text-blue-300'>{sampleText}</Heading>);
  });
});
