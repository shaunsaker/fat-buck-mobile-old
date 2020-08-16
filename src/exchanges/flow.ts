import { fork, call, put } from 'redux-saga/effects';
import { getExchanges } from './services';
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
import { onlyAuthFlow } from '../utils/onlyAuthFlow';

export const DEFAULT_EXCHANGE = 'US';

export function* fetchExchangesSaga(): SagaIterator {
  try {
    const exchanges: Exchanges = yield call(getExchanges);
    yield put(fetchExchangesSuccess(exchanges));

    const selectedExchange = yield* select(selectSelectedExchange);
    yield put(setSelectedExchange(selectedExchange || DEFAULT_EXCHANGE)); // this action is a trigger to fetch stocks
  } catch (error) {
    yield put(fetchExchangesError());
    yield put(showSnackbar(error.message));
  }
}

export function* exchangesFlow(): SagaIterator {
  yield fork(onlyAuthFlow, fetchExchangesSaga);
}
