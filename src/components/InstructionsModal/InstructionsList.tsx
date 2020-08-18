import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSelectedInstruction,
  setInstructionsModalIsOpen,
} from '../../store/actions';
import { ModalList } from '../ModalList';
import { Instructions } from '../../instructions/models';
import { selectSelectedInstruction } from '../../instructions/selectors';

export const InstructionsList = () => {
  const dispatch = useDispatch();
  const instructions = [Instructions.buy, Instructions.sell];
  const selectedInstruction = useSelector(selectSelectedInstruction);

  const onSelectInstruction = useCallback(
    (instruction) => {
      dispatch(setSelectedInstruction(instruction));
      dispatch(setInstructionsModalIsOpen(false));
    },
    [dispatch],
  );

  return (
    <ModalList
      items={instructions}
      selectedItem={selectedInstruction}
      handleSelectItem={onSelectInstruction}
    />
  );
};
