import { ApplicationState } from '../store/reducers';

export const selectIsAuthenticated = (state: ApplicationState) =>
  Boolean(state.auth.uid);

export const selectIsAuthLoading = (state: ApplicationState) =>
  state.auth.loading;
