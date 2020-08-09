import React, { useCallback } from 'react';
import Button, { ButtonKinds } from '../Button';

export const SelectExchangeButton = () => {
  const selectedExchange = 'US';

  const onSelectExchange = useCallback(() => {}, []);

  return (
    <Button
      kind={ButtonKinds.primary}
      onPress={onSelectExchange}>{`Exchange: ${selectedExchange}`}</Button>
  );
};
