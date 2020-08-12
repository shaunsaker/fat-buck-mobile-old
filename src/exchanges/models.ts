export enum ExchangesActionTypes {
  SET_EXCHANGES_MODAL_IS_OPEN = '@@exchanges/SET_EXCHANGES_MODAL_IS_OPEN',
  SET_SELECTED_EXCHANGE = '@@exchanges/SET_SELECTED_EXCHANGE',
}

export interface ExchangesState {
  exchangesModalIsOpen: boolean;
  selectedExchange: string;
}
