import React from 'react';
import styled from 'styled-components/native';
import { HeaderBar } from '../HeaderBar';
import { SelectExchangeButton } from './SelectExchangeButton';
import { SymbolList } from './SymbolList';

const HomeContainer = styled.View``;

const HomeSelectExchangeButtonContainer = styled.View`
  align-items: center;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <HeaderBar />

      <HomeSelectExchangeButtonContainer>
        <SelectExchangeButton />
      </HomeSelectExchangeButtonContainer>

      <SymbolList />
    </HomeContainer>
  );
};
