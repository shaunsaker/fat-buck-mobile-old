export enum ExchangesActionTypes {
  SET_EXCHANGES_MODAL_IS_OPEN = '@@exchanges/SET_EXCHANGES_MODAL_IS_OPEN',
  SET_SELECTED_EXCHANGE = '@@exchanges/SET_SELECTED_EXCHANGE',
  FETCH_EXCHANGES = '@@exchanges/FETCH_EXCHANGES',
  FETCH_EXCHANGES_SUCCESS = '@@exchanges/FETCH_EXCHANGES_SUCCESS',
  FETCH_EXCHANGES_ERROR = '@@exchanges/FETCH_EXCHANGES_ERROR',
}

export interface Exchange {
  name: string;
  symbols: string[];
}

export type Exchanges = Record<string, Exchange>;

export interface ExchangesState {
  exchangesModalIsOpen: boolean;
  selectedExchange: string;
  exchanges: Exchanges;
  loading: boolean;
}
