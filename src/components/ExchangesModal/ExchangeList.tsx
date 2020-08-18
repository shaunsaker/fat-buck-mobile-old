import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSelectedExchange,
  selectExchanges,
} from '../../exchanges/selectors';
import {
  setSelectedExchange,
  setExchangesModalIsOpen,
} from '../../store/actions';
import { ModalList } from '../ModalList';

export const ExchangeList = () => {
  const dispatch = useDispatch();
  const exchanges = useSelector(selectExchanges);
  const selectedExchange = useSelector(selectSelectedExchange);

  const onSelectExchange = useCallback(
    (exchange) => {
      dispatch(setSelectedExchange(exchange));
      dispatch(setExchangesModalIsOpen(false));
    },
    [dispatch],
  );

  return (
    <ModalList
      items={exchanges}
      selectedItem={selectedExchange}
      handleSelectItem={onSelectExchange}
    />
  );
};
