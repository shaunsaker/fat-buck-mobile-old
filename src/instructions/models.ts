export enum InstructionsActionTypes {
  SET_SELECTED_INSTRUCTION = '@@instructions/SET_SELECTED_INSTRUCTION',
  SET_INSTRUCTIONS_MODAL_IS_OPEN = '@@instructions/SET_INSTRUCTIONS_MODAL_IS_OPEN',
}

export enum Instructions {
  buy = 'BUY',
  sell = 'SELL',
}

export interface InstructionsState {
  selectedInstruction: Instructions;
  instructionsModalIsOpen: boolean;
}
