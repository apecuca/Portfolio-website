import { render } from '@testing-library/react';
import App from './App';

test('Exists', () => {
  render(<App />);
  expect.anything();
});