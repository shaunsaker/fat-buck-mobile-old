import { exchangesReducer, initialState } from './reducer';
import { setSelectedExchange } from './actions';

describe('exchanges reducer', () => {
  const selectedExchange = 'US';

  it('sets the selected exchange correctly', () => {
    const nextState = exchangesReducer(
      initialState,
      setSelectedExchange(selectedExchange),
    );

    expect(nextState.selectedExchange).toEqual(selectedExchange);
  });
});
