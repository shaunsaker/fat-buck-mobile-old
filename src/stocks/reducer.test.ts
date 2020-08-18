import { stocksReducer, initialState } from './reducer';
import {
  fetchStocks,
  fetchStocksError,
  fetchStocksSuccess,
  resetStocks,
} from './actions';
import { getMockStocks } from '../testUtils/getMockStocks';
import { Stock } from './models';

describe('stocks reducer', () => {
  const exchange = 'US';

  it('sets loading to true when fetching stocks', () => {
    const nextState = stocksReducer(initialState, fetchStocks(exchange));

    expect(nextState[exchange].loading).toEqual(true);
  });

  describe('fetchStocksSuccess', () => {
    it('sets state correctly when there are stocks returned', () => {
      const stocks = getMockStocks();
      let nextState = stocksReducer(initialState, fetchStocks(exchange));
      nextState = stocksReducer(
        nextState,
        fetchStocksSuccess(exchange, stocks),
      );

      expect(nextState[exchange].data.length).toEqual(stocks.length);
      const previousStartAtValue = [...stocks].reverse()[0].valuation
        .expectedReturn;
      expect(nextState[exchange].previousStartAtValue).toEqual(
        previousStartAtValue,
      );
      expect(nextState[exchange].hasMoreData).toEqual(true);
      expect(nextState[exchange].loading).toEqual(false);
    });

    it('sets state correctly when there are no stocks returned', () => {
      const stocks: Stock[] = [];
      let nextState = stocksReducer(initialState, fetchStocks(exchange));
      nextState = stocksReducer(
        nextState,
        fetchStocksSuccess(exchange, stocks),
      );

      expect(nextState[exchange].data.length).toEqual(stocks.length);
      expect(nextState[exchange].previousStartAtValue).toBeUndefined();
      expect(nextState[exchange].hasMoreData).toEqual(false);
      expect(nextState[exchange].loading).toEqual(false);
    });
  });

  it('sets loading to false when fetching stocks error', () => {
    let nextState = stocksReducer(initialState, fetchStocks(exchange));
    nextState = stocksReducer(nextState, fetchStocksError(exchange));

    expect(nextState[exchange].loading).toEqual(false);
  });

  it('resets stocks correctly', () => {
    const stocks: Stock[] = [];
    let nextState = stocksReducer(initialState, fetchStocks(exchange));
    nextState = stocksReducer(nextState, fetchStocksSuccess(exchange, stocks));
    nextState = stocksReducer(nextState, resetStocks());

    expect(nextState).toEqual(initialState);
  });
});
