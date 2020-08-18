import { ApplicationState } from '../store/reducers';

export const selectSelectedInstruction = (state: ApplicationState) =>
  state.instructions.selectedInstruction;

export const selectInstructionsModalIsOpen = (state: ApplicationState) =>
  state.instructions.instructionsModalIsOpen;
