import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Work in progress', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Work in progress/i);
  expect(linkElement).toBeInTheDocument();
});
