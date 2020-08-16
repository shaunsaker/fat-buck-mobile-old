import { ApplicationState } from '../store/reducers';

export const selectExchangesModalIsOpen = (state: ApplicationState) =>
  state.exchanges.exchangesModalIsOpen;

export const selectSelectedExchange = (state: ApplicationState) =>
  state.exchanges.selectedExchange;

export const selectExchanges = (state: ApplicationState) =>
  Object.keys(state.exchanges.exchanges).map((key) => key);

export const selectExchangesLoading = (state: ApplicationState) =>
  state.exchanges.loading;
