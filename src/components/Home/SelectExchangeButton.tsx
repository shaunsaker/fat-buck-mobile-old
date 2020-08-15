import React, { useCallback } from 'react';
import Button, { ButtonKinds } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setExchangesModalIsOpen } from '../../store/actions';
import { selectSelectedExchange } from '../../exchanges/selectors';

export const SelectExchangeButton = () => {
  const dispatch = useDispatch();
  const selectedExchange = useSelector(selectSelectedExchange);

  const onSelectExchange = useCallback(() => {
    dispatch(setExchangesModalIsOpen(true));
  }, [dispatch]);

  return (
    <Button
      kind={!selectedExchange ? ButtonKinds.secondary : ButtonKinds.primary}
      disabled={!selectedExchange}
      onPress={onSelectExchange}>
      {`Exchange: ${selectedExchange || '-'}`}
    </Button>
  );
};
