import { Reducer } from 'redux';
import { ExchangesActionTypes, ExchangesState } from './models';

export const initialState: ExchangesState = {
  exchangesModalIsOpen: false,
  selectedExchange: '',
};

export const exchangesReducer: Reducer<ExchangesState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ExchangesActionTypes.SET_EXCHANGES_MODAL_IS_OPEN: {
      return {
        ...state,
        exchangesModalIsOpen: action.payload.exchangesModalIsOpen,
      };
    }
    case ExchangesActionTypes.SET_SELECTED_EXCHANGE: {
      return {
        ...state,
        selectedExchange: action.payload.selectedExchange,
      };
    }
    default: {
      return state;
    }
  }
};
