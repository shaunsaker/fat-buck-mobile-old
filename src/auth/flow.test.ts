import {
  authRehydrateFlow,
  signOutFlow,
  SIGN_OUT_SUCCESS_MESSAGE,
  signInFlow,
  SIGN_IN_SUCCESS_MESSAGE,
} from './flow';
import { REHYDRATE } from 'redux-persist';
import { expectSaga } from 'redux-saga-test-plan';
import {
  signInError,
  signIn,
  signOut,
  signOutSuccess,
  signInSuccess,
} from './actions';
import rootReducer, { initialState } from '../store/reducers';
import {
  signUserOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from './services';
import { setSideMenuIsOpen, showSnackbar } from '../store/actions';
import {
  EXISTING_USER_EMAIL,
  NEW_USER_EMAIL,
  TEST_PASSWORD,
  TEST_UID,
} from '../../__mocks__/@react-native-firebase/auth';

describe('auth flow', () => {
  it('toggles loading to false if it was true on rehydrate', async () => {
    const state = rootReducer(
      initialState,
      signIn(EXISTING_USER_EMAIL, TEST_PASSWORD),
    );

    const result = await expectSaga(authRehydrateFlow)
      .withReducer(rootReducer)
      .withState(state)
      .dispatch({ type: REHYDRATE })
      .put(signInError())
      .run();

    expect(result.storeState.auth.loading).toEqual(false);
  });

  it('signs a new user in correctly', async () => {
    const result = await expectSaga(signInFlow)
      .withReducer(rootReducer)
      .dispatch(signIn(NEW_USER_EMAIL, TEST_PASSWORD))
      .call(signInWithEmailAndPassword, NEW_USER_EMAIL, TEST_PASSWORD)
      .call(createUserWithEmailAndPassword, NEW_USER_EMAIL, TEST_PASSWORD)
      .put(signInSuccess(TEST_UID, NEW_USER_EMAIL))
      .put(showSnackbar(SIGN_IN_SUCCESS_MESSAGE))
      .run();

    expect(result.storeState.auth.uid).toEqual(TEST_UID);
    expect(result.storeState.auth.email).toEqual(NEW_USER_EMAIL);
  });

  it('signs an existing user in correctly', async () => {
    const result = await expectSaga(signInFlow)
      .withReducer(rootReducer)
      .dispatch(signIn(EXISTING_USER_EMAIL, TEST_PASSWORD))
      .call(signInWithEmailAndPassword, EXISTING_USER_EMAIL, TEST_PASSWORD)
      .put(signInSuccess(TEST_UID, EXISTING_USER_EMAIL))
      .put(showSnackbar(SIGN_IN_SUCCESS_MESSAGE))
      .run();

    expect(result.storeState.auth.uid).toEqual(TEST_UID);
    expect(result.storeState.auth.email).toEqual(EXISTING_USER_EMAIL);
  });

  it('signs a user out correctly', async () => {
    const result = await expectSaga(signOutFlow)
      .withReducer(rootReducer)
      .dispatch(signInSuccess(TEST_UID, EXISTING_USER_EMAIL))
      .dispatch(signOut())
      .call(signUserOut)
      .put(signOutSuccess())
      .put(setSideMenuIsOpen(false))
      .put(showSnackbar(SIGN_OUT_SUCCESS_MESSAGE))
      .run();

    expect(result.storeState.auth.uid).toEqual('');
    expect(result.storeState.auth.email).toEqual('');
  });

  // TODO: test snackbar called on errors
});
