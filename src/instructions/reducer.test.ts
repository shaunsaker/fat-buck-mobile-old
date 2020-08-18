import { instructionsReducer, initialState } from './reducer';
import { setSelectedInstruction, setInstructionsModalIsOpen } from './actions';

describe('instructions reducer', () => {
  it('sets the selected instruction correctly', () => {
    const selectedInstruction = 'SELL';
    const nextState = instructionsReducer(
      initialState,
      setSelectedInstruction(selectedInstruction),
    );

    expect(nextState.selectedInstruction).toEqual(selectedInstruction);
  });

  it('sets instructionsModalOpen correctly', () => {
    const nextState = instructionsReducer(
      initialState,
      setInstructionsModalIsOpen(true),
    );

    expect(nextState.instructionsModalIsOpen).toEqual(true);
  });
});
