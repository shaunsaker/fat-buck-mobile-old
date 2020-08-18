import { Reducer } from 'redux';
import { InstructionsActionTypes, InstructionsState } from './models';
import { Instructions } from '../instructions/models';

export const initialState: InstructionsState = {
  selectedInstruction: Instructions.buy,
  instructionsModalIsOpen: false,
};

export const instructionsReducer: Reducer<InstructionsState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case InstructionsActionTypes.SET_SELECTED_INSTRUCTION: {
      return {
        ...state,
        selectedInstruction: action.payload.selectedInstruction,
      };
    }
    case InstructionsActionTypes.SET_INSTRUCTIONS_MODAL_IS_OPEN: {
      return {
        ...state,
        instructionsModalIsOpen: action.payload.instructionsModalIsOpen,
      };
    }

    default: {
      return state;
    }
  }
};
