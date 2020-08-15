import { Reducer } from 'redux';
import { ExchangesActionTypes, ExchangesState } from './models';

export const initialState: ExchangesState = {
  exchangesModalIsOpen: false,
  selectedExchange: '',
  exchanges: [],
  loading: true,
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
    case ExchangesActionTypes.FETCH_EXCHANGES: {
      return {
        ...state,
        loading: true,
      };
    }
    case ExchangesActionTypes.FETCH_EXCHANGES_SUCCESS: {
      return {
        ...state,
        exchanges: action.payload.exchanges,
        loading: false,
      };
    }
    case ExchangesActionTypes.FETCH_EXCHANGES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
