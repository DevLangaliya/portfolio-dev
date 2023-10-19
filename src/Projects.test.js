import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects component', () => {
  test('renders project names', () => {
    render(<Projects />);
    const showMe = screen.getByText('ShowMe!');
    const plantClassification = screen.getByText('Plant Classification using Transfer Learning');
    const javaDynastySimulator = screen.getByText('Java Dynasty Simulator');
    expect(showMe).toBeInTheDocument();
    expect(plantClassification).toBeInTheDocument();
    expect(javaDynastySimulator).toBeInTheDocument();
  });

  test('renders project descriptions', () => {
    render(<Projects />);
    const showMeDesc = screen.getByText('Collaborated with a team to create a movie recommendation web app, with data being pulled via the TMDB API.');
    const plantClassificationDesc = screen.getByText('Collaborated with a team to develop an application which classifies plants based on an already provided dataset.');
    const javaDynastySimulatorDesc = screen.getByText('American Football simulation game where the user manages an American Football team through a full season.');
    expect(showMeDesc).toBeInTheDocument();
    expect(plantClassificationDesc).toBeInTheDocument();
    expect(javaDynastySimulatorDesc).toBeInTheDocument();
  });
});