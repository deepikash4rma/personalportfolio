import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro and enter action', () => {
  render(<App />);
  expect(screen.getByText(/explore the space/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /enter/i })).toBeInTheDocument();
});
