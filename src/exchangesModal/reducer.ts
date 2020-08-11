import { Reducer } from 'redux';
import { ExchangesModalActionTypes, ExchangesModalState } from './models';

export const initialState: ExchangesModalState = {
  isOpen: false,
};

export const exchangesModalReducer: Reducer<ExchangesModalState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ExchangesModalActionTypes.SET_EXCHANGES_MODEL_IS_OPEN: {
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    }
    default: {
      return state;
    }
  }
};
