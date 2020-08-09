import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Label, LabelKinds } from '../Label';
import { SymbolButton, SymbolButtonProps } from '../SymbolButton';
import { FlatList } from 'react-native';

const SymbolListContainer = styled.View`
  padding: 20px;
`;

const SymbolListLabelsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
`;

const SymbolListItemContainer = styled.View`
  margin-top: 20px;
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
        contentContainerStyle={{ padding: 20 }}
        data={symbols}
        renderItem={renderItem}
      />
    </SymbolListContainer>
  );
};

export const SymbolList = () => {
  const symbols = [];

  const onSymbolPress = useCallback(() => {}, []);

  return <SymbolListBase symbols={symbols} handleSymbolPress={onSymbolPress} />;
};
