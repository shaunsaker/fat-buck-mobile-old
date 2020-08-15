import { exchangesReducer, initialState } from './reducer';
import {
  setSelectedExchange,
  setExchangesModalIsOpen,
  fetchExchanges,
  fetchExchangesSuccess,
  fetchExchangesError,
} from './actions';

describe('exchanges reducer', () => {
  const exchanges = ['US', 'JSE', 'AU'];

  it('sets exchangesModalOpen correctly', () => {
    const nextState = exchangesReducer(
      initialState,
      setExchangesModalIsOpen(true),
    );

    expect(nextState.exchangesModalIsOpen).toEqual(true);
  });

  it('sets the selected exchange correctly', () => {
    const selectedExchange = 'US';
    const nextState = exchangesReducer(
      initialState,
      setSelectedExchange(selectedExchange),
    );

    expect(nextState.selectedExchange).toEqual(selectedExchange);
  });

  it('sets loading to true when fetching exchanges', () => {
    const nextState = exchangesReducer(initialState, fetchExchanges());

    expect(nextState.loading).toEqual(true);
  });

  it('sets exchanges correctly on fetch exchanges success', () => {
    let nextState = exchangesReducer(initialState, fetchExchanges());
    nextState = exchangesReducer(nextState, fetchExchangesSuccess(exchanges));

    expect(nextState.exchanges).toEqual(exchanges);
    expect(nextState.loading).toEqual(false);
  });

  it('sets loading to false when fetch exchanges error', () => {
    let nextState = exchangesReducer(initialState, fetchExchanges());
    nextState = exchangesReducer(nextState, fetchExchangesError());

    expect(nextState.loading).toEqual(false);
  });
});
