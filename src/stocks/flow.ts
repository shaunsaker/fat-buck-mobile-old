import { SagaIterator } from 'redux-saga';
import { call, fork, takeLatest, put } from 'redux-saga/effects';
import { fetchStocks, fetchStocksSuccess, fetchStocksError } from './actions';
import { select } from '../utils/typedSelect';
import { selectSelectedExchange } from '../exchanges/selectors';
import { getStocks } from './services';
import { ExchangesActionTypes } from '../exchanges/models';
import { StocksActionTypes, Stock } from './models';
import { selectStocksPreviousStartAtValue } from '../stocks/selectors';

export const DEFAULT_START_AT = 10000; // an arb high value

export function* fetchStocksSaga(): SagaIterator {
  const exchange = yield* select(selectSelectedExchange);
  const previousStartAtValue =
    (yield* select(selectStocksPreviousStartAtValue)) || DEFAULT_START_AT;
  yield put(fetchStocks(exchange)); // toggles loading

  try {
    const stocks = (yield call(
      getStocks,
      exchange,
      previousStartAtValue,
    )) as Stock[];

    yield put(fetchStocksSuccess(exchange, stocks));
  } catch (error) {
    console.log({ error });
    yield put(fetchStocksError(exchange));
  }
}

export function* fetchStocksFlow(): SagaIterator {
  yield takeLatest(
    [
      ExchangesActionTypes.SET_SELECTED_EXCHANGE, // TODO: when this is called, we need to reset the appropriate stocks fields
      StocksActionTypes.FETCH_MORE_STOCKS,
    ],
    fetchStocksSaga,
  );
}

export function* stocksFlow(): SagaIterator {
  yield fork(fetchStocksFlow);
}
