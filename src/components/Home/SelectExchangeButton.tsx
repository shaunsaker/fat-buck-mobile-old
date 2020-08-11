import React, { useCallback } from 'react';
import Button, { ButtonKinds } from '../Button';
import { useDispatch } from 'react-redux';
import { setExchangesModelIsOpen } from '../../store/actions';

export const SelectExchangeButton = () => {
  const dispatch = useDispatch();
  const selectedExchange = 'US';

  const onSelectExchange = useCallback(() => {
    dispatch(setExchangesModelIsOpen(true));
  }, [dispatch]);

  return (
    <Button
      kind={ButtonKinds.primary}
      onPress={onSelectExchange}>{`Exchange: ${selectedExchange}`}</Button>
  );
};
