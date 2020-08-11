import { ApplicationState } from '../store/reducers';

export const selectSelectedExchange = (state: ApplicationState) =>
  state.exchanges.selectedExchange;
