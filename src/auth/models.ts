export enum AuthActionTypes {
  SIGN_IN = '@@auth/SIGN_IN',
  SIGN_IN_SUCCESS = '@@auth/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = '@@auth/SIGN_IN_ERROR',
  SIGN_OUT = '@@auth/SIGN_OUT',
  SIGN_OUT_SUCCESS = '@@auth/SIGN_OUT_SUCCESS',
  SIGN_OUT_ERROR = '@@auth/SIGN_OUT_ERROR',
}

export interface AuthState {
  loading: boolean;
  uid: string;
  email: string;
}
