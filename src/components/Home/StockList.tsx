import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Label, LabelKinds } from '../Label';
import { StockButton, StockButtonProps } from './StockButton';
import { FlatList } from 'react-native';
import { Instructions } from '../../models';

const StockListContainer = styled.View`
  flex: 1;
`;

const StockListLabelsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 50px 0;
`;

const StockListItemContainer = styled.View`
  margin: 20px 20px 0;
`;

type Stock = Omit<StockButtonProps, 'onPress'>;
interface StockListProps {
  symbols: Stock[];
  handleStockPress: (symbol: Stock) => void;
}

const StockListBase = ({ symbols, handleStockPress }: StockListProps) => {
  const renderItem = useCallback(
    ({ item }) => (
      <StockListItemContainer>
        <StockButton {...item} onPress={() => handleStockPress(item)} />
      </StockListItemContainer>
    ),
    [handleStockPress],
  );

  return (
    <StockListContainer>
      <StockListLabelsContainer>
        <Label kind={LabelKinds.secondary}>Name</Label>

        <Label kind={LabelKinds.secondary}>Expected Return %</Label>
      </StockListLabelsContainer>

      <FlatList
        data={symbols}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </StockListContainer>
  );
};

export const StockList = () => {
  const symbols: Stock[] = [
    {
      name: 'AAPL',
      instruction: Instructions.buy,
      expectedReturn: 27,
    },
    {
      name: 'TSL',
      instruction: Instructions.hold,
      expectedReturn: 3,
    },
    {
      name: 'IBM',
      instruction: Instructions.sell,
      expectedReturn: -12,
    },
  ];

  const onStockPress = useCallback(() => {}, []);

  return <StockListBase symbols={symbols} handleStockPress={onStockPress} />;
};
