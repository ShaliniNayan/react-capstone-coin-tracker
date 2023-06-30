import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  it('renders the component without errors', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getByText('CoinTracker')).toBeInTheDocument();
  });

  it('renders the correct link when on homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getByText('Coins')).toBeInTheDocument();
  });

  it('renders the correct link when on other pages', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getByText('Back')).toBeInTheDocument();
  });
});
