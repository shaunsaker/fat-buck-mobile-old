import { Reducer } from 'redux';
import { StocksActionTypes, StocksState } from './models';

export const initialState: StocksState = {};

export const stocksReducer: Reducer<StocksState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case StocksActionTypes.FETCH_STOCKS: {
      return {
        ...state,
        [action.payload.exchange]: {
          ...state[action.payload.exchange],
          loading: true,
        },
      };
    }
    case StocksActionTypes.FETCH_STOCKS_SUCCESS: {
      const existingData = state[action.payload.exchange].data || [];
      const updatedData = existingData.concat(action.payload.stocks);
      const updatedDataCopy = [...updatedData]; // reverse is mutating
      const previousStartAtValue = updatedDataCopy.reverse()[0]?.valuation
        .expectedReturn;
      const hasMoreData = Boolean(action.payload.stocks.length);

      return {
        ...state,
        [action.payload.exchange]: {
          ...state[action.payload.exchange],
          data: updatedData,
          previousStartAtValue,
          hasMoreData,
          loading: false,
        },
      };
    }
    case StocksActionTypes.FETCH_STOCKS_ERROR: {
      return {
        ...state,
        [action.payload.exchange]: {
          ...state[action.payload.exchange],
          loading: false,
        },
      };
    }
    case StocksActionTypes.RESET_STOCKS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
