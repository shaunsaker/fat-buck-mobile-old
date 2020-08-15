import rootReducer, { initialState } from '../store/reducers';
import { signInSuccess } from '../auth/actions';
import {
  TEST_UID,
  EXISTING_USER_EMAIL,
} from '../../__mocks__/@react-native-firebase/auth';
import { TEST_EXCHANGES } from '../../__mocks__/@react-native-firebase/firestore';
import { expectSaga } from 'redux-saga-test-plan';
import { exchangesFlow, DEFAULT_EXCHANGE } from './flow';
import { getExchanges } from './services';
import { fetchExchangesSuccess, setSelectedExchange } from './actions';
import { objectArrayToObject } from '../utils/objectArrayToObject';

describe('exchanges flow', () => {
  it('when authenticated, it fetches the exchanges and sets the selected exchange to the default exchange', async () => {
    const state = rootReducer(
      initialState,
      signInSuccess(TEST_UID, EXISTING_USER_EMAIL),
    );

    await expectSaga(exchangesFlow)
      .withReducer(rootReducer)
      .withState(state)
      .call(getExchanges)
      .put(fetchExchangesSuccess(objectArrayToObject(TEST_EXCHANGES)))
      .put(setSelectedExchange(DEFAULT_EXCHANGE))
      .run();
  });

  it('when not authenticated, it does not fetch the exchanges', async () => {
    await expectSaga(exchangesFlow)
      .withReducer(rootReducer)
      .withState(initialState)
      .not.call(getExchanges)
      .not.put(fetchExchangesSuccess(objectArrayToObject(TEST_EXCHANGES)))
      .not.put(setSelectedExchange(DEFAULT_EXCHANGE))
      .run();
  });
});
