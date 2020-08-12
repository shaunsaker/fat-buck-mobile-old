import { exchangesReducer, initialState } from './reducer';
import { setSelectedExchange, setExchangesModalIsOpen } from './actions';

describe('exchanges reducer', () => {
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
});
