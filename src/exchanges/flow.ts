import { fork, call, put } from 'redux-saga/effects';
import { getExchanges } from './services';
import { selectIsAuthenticated } from '../auth/selectors';
import { waitFor } from '../utils/waitFor';
import {
  showSnackbar,
  fetchExchangesSuccess,
  fetchExchangesError,
  setSelectedExchange,
} from '../store/actions';
import { SagaIterator } from 'redux-saga';
import { Exchanges } from './models';
import { select } from '../utils/typedSelect';
import { selectSelectedExchange } from './selectors';

export const DEFAULT_EXCHANGE = 'US';

export function* fetchExchangesFlow(): SagaIterator {
  yield call(waitFor, selectIsAuthenticated, false); // only while authed
  try {
    const exchanges: Exchanges = yield call(getExchanges);
    yield put(fetchExchangesSuccess(exchanges));

    const selectedExchange = yield* select(selectSelectedExchange);
    if (!selectedExchange) {
      yield put(setSelectedExchange(DEFAULT_EXCHANGE));
    }
  } catch (error) {
    yield put(fetchExchangesError());
    yield put(showSnackbar(error.message));
  }
}

export function* exchangesFlow(): SagaIterator {
  yield fork(fetchExchangesFlow);
}
