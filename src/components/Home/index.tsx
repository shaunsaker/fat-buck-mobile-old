import React from 'react';
import styled from 'styled-components/native';
import { HeaderBar } from '../HeaderBar';
import { SelectExchangeButton } from './SelectExchangeButton';
import { SymbolList } from './SymbolList';
import { ExchangesModal } from '../ExchangesModal';
import { Background } from '../Background';

const HomeSelectExchangeButtonContainer = styled.View`
  align-items: center;
`;

export const Home = () => {
  return (
    <Background>
      <HeaderBar text="Fat Buck" />

      <HomeSelectExchangeButtonContainer>
        <SelectExchangeButton />
      </HomeSelectExchangeButtonContainer>

      <SymbolList />

      <ExchangesModal />
    </Background>
  );
};
