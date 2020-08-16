import rootReducer, { initialState } from '../store/reducers';
import { expectSaga } from 'redux-saga-test-plan';
import { fetchStocksSaga, DEFAULT_START_AT } from './flow';
import {
  setSelectedExchange,
  signIn,
  fetchStocks,
  fetchStocksSuccess,
} from '../store/actions';
import {
  EXISTING_USER_EMAIL,
  TEST_PASSWORD,
} from '../../__mocks__/@react-native-firebase/auth';
import { getStocks } from './services';
import { TEST_STOCKS } from '../../__mocks__/@react-native-firebase/firestore';

describe('stocks flow', () => {
  it('fetches stocks correctly ', async () => {
    const exchange = 'US';
    const stocks = TEST_STOCKS;
    let state = rootReducer(
      initialState,
      signIn(EXISTING_USER_EMAIL, TEST_PASSWORD),
    );
    state = rootReducer(state, setSelectedExchange(exchange));

    await expectSaga(fetchStocksSaga)
      .withReducer(rootReducer)
      .withState(state)
      .dispatch(setSelectedExchange(exchange))
      .put(fetchStocks(exchange))
      .call(getStocks, exchange, DEFAULT_START_AT)
      .put(fetchStocksSuccess(exchange, stocks))
      .run();
  });
});
