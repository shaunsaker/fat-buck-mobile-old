import React, { useCallback } from 'react';
import Button, { ButtonKinds } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setExchangesModelIsOpen } from '../../store/actions';
import { selectSelectedExchange } from '../../exchanges/selectors';

export const SelectExchangeButton = () => {
  const dispatch = useDispatch();
  const selectedExchange = useSelector(selectSelectedExchange);

  const onSelectExchange = useCallback(() => {
    dispatch(setExchangesModelIsOpen(true));
  }, [dispatch]);

  return (
    <Button
      kind={ButtonKinds.primary}
      onPress={onSelectExchange}>{`Exchange: ${selectedExchange}`}</Button>
  );
};
