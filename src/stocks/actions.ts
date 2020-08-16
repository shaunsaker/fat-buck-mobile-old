import { action } from 'typesafe-actions';

import { StocksActionTypes, Stock } from './models';

export const fetchStocks = (exchange: string) =>
  action(StocksActionTypes.FETCH_STOCKS, { exchange });

export const fetchMoreStocks = () =>
  action(StocksActionTypes.FETCH_MORE_STOCKS);

export const fetchStocksSuccess = (exchange: string, stocks: Stock[]) =>
  action(StocksActionTypes.FETCH_STOCKS_SUCCESS, {
    exchange,
    stocks,
  });

export const fetchStocksError = (exchange: string) =>
  action(StocksActionTypes.FETCH_STOCKS_ERROR, { exchange });
