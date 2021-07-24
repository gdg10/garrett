import { render, screen } from '@testing-library/react';
import App from './App';

test('its renders my name', () => {
  render(<App />);
  const myName = screen.getByText("Garrett Grube");
  expect(myName).toBeInTheDocument();
});

test('its renders a checkers link', () => {
  render(<App />);
  const checkersLink = screen.getByText(/a checkers game I built/i);
  expect(checkersLink).toBeInTheDocument();
});

test('it renders a linkedin link', () => {
  render(<App />);
  const linkedinLink = screen.getByText(/linkedin/i);
  expect(linkedinLink).toBeInTheDocument();
});

test('it renders a github link', () => {
  render(<App />);
  const githubLink = screen.getByText(/github/i);
  expect(githubLink).toBeInTheDocument();
});