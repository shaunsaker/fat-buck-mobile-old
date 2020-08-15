import { action } from 'typesafe-actions';

import { ExchangesActionTypes, Exchanges } from './models';

export const setSelectedExchange = (selectedExchange: string) =>
  action(ExchangesActionTypes.SET_SELECTED_EXCHANGE, {
    selectedExchange,
  });

export const setExchangesModalIsOpen = (exchangesModalIsOpen: boolean) =>
  action(ExchangesActionTypes.SET_EXCHANGES_MODAL_IS_OPEN, {
    exchangesModalIsOpen,
  });

export const fetchExchanges = () =>
  action(ExchangesActionTypes.FETCH_EXCHANGES);

export const fetchExchangesSuccess = (exchanges: Exchanges) =>
  action(ExchangesActionTypes.FETCH_EXCHANGES_SUCCESS, {
    exchanges,
  });

export const fetchExchangesError = () =>
  action(ExchangesActionTypes.FETCH_EXCHANGES_ERROR);
