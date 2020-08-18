import React, { useCallback } from 'react';
import Button, { ButtonKinds } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setInstructionsModalIsOpen } from '../../store/actions';
import { selectSelectedInstruction } from '../../instructions/selectors';
import { Instructions } from '../../instructions/models';
import { colors } from '../../colors';

export const SelectInstructionButton = () => {
  const dispatch = useDispatch();
  const selectedInstruction = useSelector(selectSelectedInstruction);

  const onSelectInstruction = useCallback(() => {
    dispatch(setInstructionsModalIsOpen(true));
  }, [dispatch]);

  return (
    <Button
      kind={ButtonKinds.secondary}
      borderColor={
        selectedInstruction === Instructions.sell ? colors.red : undefined
      }
      disabled={!selectedInstruction}
      onPress={onSelectInstruction}>
      {selectedInstruction}
    </Button>
  );
};
