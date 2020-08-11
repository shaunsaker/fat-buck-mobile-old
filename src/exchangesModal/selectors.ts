import { ApplicationState } from '../store/reducers';

export const selectExchangesModalIsOpen = (state: ApplicationState) =>
  state.exchangesModal.isOpen;
