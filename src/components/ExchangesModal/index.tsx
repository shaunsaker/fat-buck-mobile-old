import React, { useCallback } from 'react';
import { ExchangeList } from './ExchangeList';
import { selectExchangesModalIsOpen } from '../../exchanges/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setExchangesModalIsOpen } from '../../store/actions';
import { Modal } from '../Modal';

export const ExchangesModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectExchangesModalIsOpen);

  const onClose = useCallback(() => {
    dispatch(setExchangesModalIsOpen(false));
  }, [dispatch]);

  return (
    <Modal title="Select an Exchange" isOpen={isOpen} handleClose={onClose}>
      <ExchangeList />
    </Modal>
  );
};
