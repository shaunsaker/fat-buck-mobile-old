import { ApplicationState } from '../store/reducers';

export const selectExchangesModelIsOpen = (state: ApplicationState) =>
  state.exchangesModal.isOpen;
