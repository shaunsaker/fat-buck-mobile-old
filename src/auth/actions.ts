import { action } from 'typesafe-actions';

import { AuthActionTypes } from './models';

export const signIn = (email: string, password: string) =>
  action(AuthActionTypes.SIGN_IN, {
    email,
    password,
  });

export const signInSuccess = (uid: string, email: string | null) =>
  action(AuthActionTypes.SIGN_IN_SUCCESS, {
    uid,
    email,
  });

export const signInError = () => action(AuthActionTypes.SIGN_IN_ERROR);

export const signOut = () => action(AuthActionTypes.SIGN_OUT);

export const signOutSuccess = () => action(AuthActionTypes.SIGN_OUT_SUCCESS);

export const signOutError = () => action(AuthActionTypes.SIGN_OUT_ERROR);
