import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../components';

describe('Navbar', () => {
  test('displays logo and navigation links', () => {
    render(
      <MemoryRouter>
        {' '}
        <Navbar />
        {' '}
      </MemoryRouter>,
    );
    const logo = screen.getByText('Math Magicians');
    expect(logo).toBeInTheDocument();
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    const calculatorLink = screen.getByText('Calculator');
    expect(calculatorLink).toBeInTheDocument();
    const quotesLink = screen.getByText('Quotes');
    expect(quotesLink).toBeInTheDocument();
  });
  test('navigation links have correct paths', () => {
    render(
      <MemoryRouter>
        {' '}
        <Navbar />
        {' '}
      </MemoryRouter>,
    );
    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveAttribute('href', '/');
    const calculatorLink = screen.getByText('Calculator');
    expect(calculatorLink).toHaveAttribute('href', '/calculator');
    const quotesLink = screen.getByText('Quotes');
    expect(quotesLink).toHaveAttribute('href', '/quotes');
  });
});
