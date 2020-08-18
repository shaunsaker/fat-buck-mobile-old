import { action } from 'typesafe-actions';

import { InstructionsActionTypes } from './models';

export const setSelectedInstruction = (selectedInstruction: string) =>
  action(InstructionsActionTypes.SET_SELECTED_INSTRUCTION, {
    selectedInstruction,
  });

export const setInstructionsModalIsOpen = (instructionsModalIsOpen: boolean) =>
  action(InstructionsActionTypes.SET_INSTRUCTIONS_MODAL_IS_OPEN, {
    instructionsModalIsOpen,
  });
