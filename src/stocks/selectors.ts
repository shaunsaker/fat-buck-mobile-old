import { ApplicationState } from '../store/reducers';

export const selectStocks = (state: ApplicationState) => {
  const selectedExchange = state.exchanges.selectedExchange;
  return state.stocks[selectedExchange]?.data;
};

export const selectStocksPreviousStartAtValue = (state: ApplicationState) => {
  const selectedExchange = state.exchanges.selectedExchange;
  return state.stocks[selectedExchange]?.previousStartAtValue;
};

export const selectStocksLoading = (state: ApplicationState) => {
  const selectedExchange = state.exchanges.selectedExchange;
  return state.stocks[selectedExchange]?.loading;
};

export const selectStocksHasMoreData = (state: ApplicationState) => {
  const selectedExchange = state.exchanges.selectedExchange;
  return state.stocks[selectedExchange]?.hasMoreData;
};
