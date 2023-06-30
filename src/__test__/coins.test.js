import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleCollection from '../components/Coins';
import '@testing-library/jest-dom/extend-expect';
import coin from '../__mock__/mockCoin';

describe('SingleCollection', () => {
  it('renders the component without errors', () => {
    render(<SingleCollection coin={coin} />);
    expect(screen.getByText('Crypto Name = Bitcoin')).toBeInTheDocument();
  });

  it('renders the correct coin symbol', () => {
    render(<SingleCollection coin={coin} />);
    expect(screen.getByText('Symbol = BTC')).toBeInTheDocument();
  });

  it('renders the correct coin price', () => {
    render(<SingleCollection coin={coin} />);
    expect(screen.getByText('Price = 50000')).toBeInTheDocument();
  });

  it('renders the correct coin rank', () => {
    render(<SingleCollection coin={coin} />);
    expect(screen.getByText('Crypto Ranking =#1')).toBeInTheDocument();
  });
});
