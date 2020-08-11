export enum ExchangesActionTypes {
  SET_SELECTED_EXCHANGE = '@@sideMenu/SET_SELECTED_EXCHANGE',
}

export interface ExchangesState {
  selectedExchange: string;
}
