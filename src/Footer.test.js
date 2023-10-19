import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer', () => {
  render(<Footer />);
  const footer = screen.getByTestId('footer');
  expect(footer).toBeInTheDocument();
});

test('renders GitHub link', () => {
  render(<Footer />);
  const githubLink = screen.getByRole('link', { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://www.github.com/DevLangaliya');
});

test('renders LinkedIn link', () => {
  render(<Footer />);
  const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/dev-langaliya');
});

test('renders GitHub image', () => {
  render(<Footer />);
  const githubImage = screen.getByAltText(/dev langaliya/i);
  expect(githubImage).toBeInTheDocument();
  expect(githubImage).toHaveAttribute('src', './github.png');
});

test('renders LinkedIn image', () => {
  render(<Footer />);
  const linkedinImage = screen.getByAltText(/dev langaliya/i, { exact: false });
  expect(linkedinImage).toBeInTheDocument();
  expect(linkedinImage).toHaveAttribute('src', './linkedin.png');
});