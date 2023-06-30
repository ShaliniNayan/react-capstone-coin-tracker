import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer', () => {
  it('renders the component without errors', () => {
    render(<Footer />);
    expect(screen.getByText('©sndprs')).toBeInTheDocument();
  });
});
