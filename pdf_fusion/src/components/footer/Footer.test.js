import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';

//To check that the Footer component renders correctly and displays all the expected links (Home, Merge PDFs, Split PDFs, Annotate PDFs).
test('renders the Footer component', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Merge PDFs')).toBeInTheDocument();
  expect(screen.getByText('Split PDFs')).toBeInTheDocument();
  expect(screen.getByText('Annotate PDFs')).toBeInTheDocument();
});

//Purpose: To ensure that all the social media links (Email, LinkedIn, GitHub) are present and properly labeled.
test('renders all social media links', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
});

//Purpose: To verify that the copyright text is correctly displayed.
test('renders copyright text', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  expect(screen.getByText('HK © 2024')).toBeInTheDocument();
});
