import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header title', () => {
  render(<Header />);
  const headerTitle = screen.getByText(/Dev Langaliya/i);
  expect(headerTitle).toBeInTheDocument();
});

test('renders header with correct class', () => {
  render(<Header />);
  const header = screen.getByTestId('header');
  expect(header).toHaveClass('App-header');
});