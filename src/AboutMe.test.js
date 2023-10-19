import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

test('renders About Me heading', () => {
  render(<AboutMe />);
  const heading = screen.getByRole('heading', { name: /about me/i });
  expect(heading).toBeInTheDocument();
});

test('renders name', () => {
  render(<AboutMe />);
  const name = screen.getByText(/dev langaliya/i);
  expect(name).toBeInTheDocument();
});

test('renders current education', () => {
  render(<AboutMe />);
  const education = screen.getByText(/applied mathematics and economics/i);
  expect(education).toBeInTheDocument();
});

test('renders interest in web applications', () => {
  render(<AboutMe />);
  const interest = screen.getByText(/building intuitive and user-friendly web applications/i);
  expect(interest).toBeInTheDocument();
});

test('renders current project', () => {
  render(<AboutMe />);
  const project = screen.getByText(/practice their poker skills with real time board analysis/i);
  expect(project).toBeInTheDocument();
});

test('renders passion for building web applications', () => {
  render(<AboutMe />);
  const passion = screen.getAllByText(/software engineer with a passion for building web applications/i);
  expect(passion.length).toBe(2);
});