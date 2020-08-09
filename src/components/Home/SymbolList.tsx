import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Label, LabelKinds } from '../Label';
import { SymbolButton, SymbolButtonProps } from '../SymbolButton';
import { FlatList } from 'react-native';
import { Instructions } from '../../models';

const SymbolListContainer = styled.View`
  flex: 1;
`;

const SymbolListLabelsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 50px 0;
`;

const SymbolListItemContainer = styled.View`
  margin: 20px 20px 0;
`;

type Symbol = Omit<SymbolButtonProps, 'onPress'>;
interface SymbolListProps {
  symbols: Symbol[];
  handleSymbolPress: (symbol: Symbol) => void;
}

const SymbolListBase = ({ symbols, handleSymbolPress }: SymbolListProps) => {
  const renderItem = useCallback(
    ({ item }) => (
      <SymbolListItemContainer>
        <SymbolButton {...item} onPress={() => handleSymbolPress(item)} />
      </SymbolListItemContainer>
    ),
    [handleSymbolPress],
  );

  return (
    <SymbolListContainer>
      <SymbolListLabelsContainer>
        <Label kind={LabelKinds.secondary}>Name</Label>

        <Label kind={LabelKinds.secondary}>Expected Return %</Label>
      </SymbolListLabelsContainer>

      <FlatList
        data={symbols}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </SymbolListContainer>
  );
};

export const SymbolList = () => {
  const symbols: Symbol[] = [
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

  const onSymbolPress = useCallback(() => {}, []);

  return <SymbolListBase symbols={symbols} handleSymbolPress={onSymbolPress} />;
};
