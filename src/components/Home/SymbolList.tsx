import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Label, LabelKinds } from '../Label';
import { SymbolButton, SymbolButtonProps } from '../SymbolButton';

const SymbolListContainer = styled.View`
  padding: 20px;
`;

const SymbolListLabelsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
`;

const SymbolListItemsContainer = styled.ScrollView``;

const SymbolListItemContainer = styled.View`
  margin-top: 20px;
`;

type Symbol = Omit<SymbolButtonProps, 'onPress'>;
interface SymbolListProps {
  symbols: Symbol[];
  handleSymbolPress: (symbol: Symbol) => void;
}

const SymbolListBase = ({ symbols, handleSymbolPress }: SymbolListProps) => {
  return (
    <SymbolListContainer>
      <SymbolListLabelsContainer>
        <Label kind={LabelKinds.secondary}>Name</Label>

        <Label kind={LabelKinds.secondary}>Expected Return %</Label>
      </SymbolListLabelsContainer>

      <SymbolListItemsContainer>
        {symbols &&
          symbols.map((symbol) => (
            <SymbolListItemContainer>
              <SymbolButton
                {...symbol}
                onPress={() => handleSymbolPress(symbol)}
              />
            </SymbolListItemContainer>
          ))}
      </SymbolListItemsContainer>
    </SymbolListContainer>
  );
};

export const SymbolList = () => {
  const symbols = [];

  const onSymbolPress = useCallback(() => {}, []);

  return <SymbolListBase symbols={symbols} handleSymbolPress={onSymbolPress} />;
};
