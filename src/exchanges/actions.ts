import { action } from 'typesafe-actions';

import { ExchangesActionTypes } from './models';

export const setSelectedExchange = (selectedExchange: string) =>
  action(ExchangesActionTypes.SET_SELECTED_EXCHANGE, {
    selectedExchange,
  });
