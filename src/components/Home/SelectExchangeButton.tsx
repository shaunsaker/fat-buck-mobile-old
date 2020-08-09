import React, { useCallback } from 'react';
import Button from '../Button';

export const SelectExchangeButton = () => {
  const selectedExchange = 'US';

  const onSelectExchange = useCallback(() => {}, []);

  return (
    <Button
      onPress={onSelectExchange}>{`Exchange: ${selectedExchange}`}</Button>
  );
};
