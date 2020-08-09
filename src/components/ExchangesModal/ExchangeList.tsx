import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Button, { ButtonKinds } from '../Button';

const ExchangeListItemContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

interface ExchangeListProps {
  exchanges: string[];
  selectedExchange: string;
  handleSelectExchange: (exchange: string) => void;
}

const ExchangeListBase = ({
  exchanges,
  selectedExchange,
  handleSelectExchange,
}: ExchangeListProps) => {
  const renderItem = useCallback(
    ({ item }) => {
      return (
        <ExchangeListItemContainer>
          <Button
            kind={
              selectedExchange === item
                ? ButtonKinds.primary
                : ButtonKinds.secondary
            }
            onPress={() => handleSelectExchange(item)}>
            {item}
          </Button>
        </ExchangeListItemContainer>
      );
    },
    [selectedExchange, handleSelectExchange],
  );

  return (
    <FlatList
      data={exchanges}
      keyExtractor={(item) => item}
      renderItem={renderItem}
    />
  );
};

export const ExchangeList = () => {
  const exchanges = ['AU', 'JSE', 'US'];
  const selectedExchange = 'US';

  const onSelectExchange = useCallback(() => {}, []);

  return (
    <ExchangeListBase
      exchanges={exchanges}
      selectedExchange={selectedExchange}
      handleSelectExchange={onSelectExchange}
    />
  );
};
