import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';

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

test('renders copyright text', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  expect(screen.getByText('HK © 2024')).toBeInTheDocument();
});
