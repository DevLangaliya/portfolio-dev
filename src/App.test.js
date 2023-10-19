import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main div', () => {
  render(<App />);
  const mainDiv = screen.getByTestId('main-div');
  expect(mainDiv).toBeInTheDocument();
});

test('renders header', () => {
  render(<App />);
  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
});

test('renders about me section', () => {
  render(<App />);
  const aboutMe = screen.getByTestId('about-me');
  expect(aboutMe).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projects = screen.getByTestId('projects');
  expect(projects).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const footer = screen.getByTestId('footer');
  expect(footer).toBeInTheDocument();
});