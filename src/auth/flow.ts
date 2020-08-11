import { takeLatest, fork, call, put, select } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { SagaIterator } from 'redux-saga';
import { Snackbar } from '../components/Snackbar';
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

export function* authLoadingFlow(): Generator {
  // if auth is loading on rehydrate, there was an error somewhere
  yield takeLatest(REHYDRATE, function* (): SagaIterator {
    const isLoading = yield select(selectIsAuthLoading);

    if (isLoading) {
      yield put(signInError());
    }
  });
}

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
      Snackbar.show('Sign in success.');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        // if the user wasn't found, attempt to create the user
        try {
          const user: FirebaseAuthTypes.UserCredential = yield call(
            createUserWithEmailAndPassword,
            action.payload.email,
            action.payload.password,
          );

          yield put(signInSuccess(user.user.uid, user.user.email));
          Snackbar.show('Sign in success.');
        } catch (createUserError) {
          Snackbar.show(createUserError.message);
          yield put(signOutError());
        }
      } else {
        Snackbar.show(error.message);
        yield put(signOutError());
      }
    }
  });
}

export function* signOutFlow(): Generator {
  yield takeLatest(AuthActionTypes.SIGN_OUT, function* (): SagaIterator {
    yield call(signUserOut);
    yield put(signOutSuccess());
    Snackbar.show('Sign out success.');
  });
}

export function* authFlow(): Generator {
  yield fork(authLoadingFlow);
  yield fork(signInFlow);
  yield fork(signOutFlow);
}
