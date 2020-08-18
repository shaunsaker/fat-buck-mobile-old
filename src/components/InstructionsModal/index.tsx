import React, { useCallback } from 'react';
import { InstructionsList } from './InstructionsList';
import { useSelector, useDispatch } from 'react-redux';
import { setInstructionsModalIsOpen } from '../../store/actions';
import { Modal } from '../Modal';
import { selectInstructionsModalIsOpen } from '../../instructions/selectors';

export const InstructionsModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectInstructionsModalIsOpen);

  const onClose = useCallback(() => {
    dispatch(setInstructionsModalIsOpen(false));
  }, [dispatch]);

  return (
    <Modal title="Select an Instruction" isOpen={isOpen} handleClose={onClose}>
      <InstructionsList />
    </Modal>
  );
};
