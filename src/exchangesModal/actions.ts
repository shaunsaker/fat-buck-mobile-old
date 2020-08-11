import { action } from 'typesafe-actions';

import { ExchangesModalActionTypes } from './models';

export const setExchangesModelIsOpen = (isOpen: boolean) =>
  action(ExchangesModalActionTypes.SET_EXCHANGES_MODEL_IS_OPEN, {
    isOpen,
  });
