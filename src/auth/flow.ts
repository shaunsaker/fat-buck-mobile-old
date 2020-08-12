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

function* rehydrateFlow(): Generator {
  // we don't want to persist auth loading state but we can't blacklist it because it's not it's own reducer
  // let's reset it on rehydrate
  yield takeLatest(REHYDRATE, function* (): SagaIterator {
    const isLoading = yield select(selectIsAuthLoading);

    if (isLoading) {
      yield put(signInError());
    }
  });
}

function* signInFlow(): Generator {
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
      yield put(showSnackbar('Sign in success.'));
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
          yield put(showSnackbar('Sign in success.'));
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

function* signOutFlow(): Generator {
  yield takeLatest(AuthActionTypes.SIGN_OUT, function* (): SagaIterator {
    yield call(signUserOut);
    yield put(signOutSuccess());
    yield put(setSideMenuIsOpen(false));
    yield put(showSnackbar('Sign out success.'));
  });
}

export function* authFlow(): Generator {
  yield fork(rehydrateFlow);
  yield fork(signInFlow);
  yield fork(signOutFlow);
}
