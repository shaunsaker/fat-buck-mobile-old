import { takeLatest, fork, call, put, select } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { SagaIterator } from 'redux-saga';
import {
  signIn,
  signInSuccess,
  signOutSuccess,
  signOutError,
  signInError,
} from './actions';
import { AuthActionTypes } from './models';
import { selectIsAuthLoading } from './selectors';
import { REHYDRATE } from 'redux-persist';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signUserOut,
} from './services';
import { setSideMenuIsOpen, showSnackbar } from '../store/actions';

export function* authRehydrateFlow(): Generator {
  // we don't want to persist auth loading state but we can't blacklist it because it's not it's own reducer
  // let's reset it on rehydrate
  yield takeLatest(REHYDRATE, function* (): SagaIterator {
    const isLoading = yield select(selectIsAuthLoading);

    if (isLoading) {
      yield put(signInError());
    }
  });
}

export const SIGN_IN_SUCCESS_MESSAGE = 'Sign in success.';
export const USER_NOT_FOUND_ERROR_MESSAGE = 'User not found.'; // TODO: test this;

export function* signInFlow(): Generator {
  yield takeLatest(AuthActionTypes.SIGN_IN, function* (
    action: ActionType<typeof signIn>,
  ): SagaIterator {
    // first attempt to sign in with email and password
    try {
      const user: FirebaseAuthTypes.UserCredential = yield call(
        signInWithEmailAndPassword,
        action.payload.email,
        action.payload.password,
      );

      yield put(signInSuccess(user.user.uid, user.user.email));
      yield put(showSnackbar(SIGN_IN_SUCCESS_MESSAGE));
    } catch (error) {
      if (error.message === USER_NOT_FOUND_ERROR_MESSAGE) {
        // if the user wasn't found, attempt to create the user
        try {
          const user: FirebaseAuthTypes.UserCredential = yield call(
            createUserWithEmailAndPassword,
            action.payload.email,
            action.payload.password,
          );

          yield put(signInSuccess(user.user.uid, user.user.email));
          yield put(showSnackbar(SIGN_IN_SUCCESS_MESSAGE));
        } catch (createUserError) {
          yield put(showSnackbar(createUserError.message));
          yield put(signOutError());
        }
      } else {
        yield put(showSnackbar(error.message));
        yield put(signOutError());
      }
    }
  });
}

export const SIGN_OUT_SUCCESS_MESSAGE = 'Sign out success.';

export function* signOutFlow(): Generator {
  yield takeLatest(AuthActionTypes.SIGN_OUT, function* (): SagaIterator {
    yield call(signUserOut);
    yield put(signOutSuccess());
    yield put(setSideMenuIsOpen(false));
    yield put(showSnackbar(SIGN_OUT_SUCCESS_MESSAGE));
  });
}

export function* authFlow(): Generator {
  yield fork(authRehydrateFlow);
  yield fork(signInFlow);
  yield fork(signOutFlow);
}
