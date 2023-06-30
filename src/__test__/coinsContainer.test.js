import { MemoryRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/Store';
import CoinsContainer from '../components/CoinsContainer';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const data = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    id: 'bitcoin',
    price: '30048.40',
    percent_change_24h: '-0.31',
    percent_change_1h: '0.11',
    percent_change_7d: '-1.59',
    price_btc: '1.00',
    market_cap_usd: '583163759527.79',
    volume24: 18382660443.609882,
    volume24a: 10487103713.130768,
    supply: '19407484.00',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    id: '80',
    price: '1857.17',
    percent_change_24h: '0.21',
    percent_change_1h: '0.24',
    percent_change_7d: '-1.28',
    price_btc: '0.061798',
    market_cap_usd: '227272062947.10',
    volume24: 18382660443.609882,
    volume24a: 10793675580.448414,
    supply: '122375302.00',
  },
];

describe('CoinContainer', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(data);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CoinsContainer />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
