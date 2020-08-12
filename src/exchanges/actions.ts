import { action } from 'typesafe-actions';

import { ExchangesActionTypes } from './models';

export const setSelectedExchange = (selectedExchange: string) =>
  action(ExchangesActionTypes.SET_SELECTED_EXCHANGE, {
    selectedExchange,
  });

export const setExchangesModalIsOpen = (exchangesModalIsOpen: boolean) =>
  action(ExchangesActionTypes.SET_EXCHANGES_MODAL_IS_OPEN, {
    exchangesModalIsOpen,
  });
