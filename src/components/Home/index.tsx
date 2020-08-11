import React from 'react';
import styled from 'styled-components/native';
import { HeaderBar } from '../HeaderBar';
import { SelectExchangeButton } from './SelectExchangeButton';
import { SymbolList } from './SymbolList';
import { ExchangesModal } from '../ExchangesModal';

const HomeContainer = styled.View`
  flex: 1;
`;

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

      <ExchangesModal />
    </HomeContainer>
  );
};
