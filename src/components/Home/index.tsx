import React from 'react';
import styled from 'styled-components/native';
import { HeaderBar } from '../HeaderBar';
import { SelectExchangeButton } from './SelectExchangeButton';
import { StockList } from './StockList';
import { ExchangesModal } from '../ExchangesModal';
import { Background } from '../Background';

const HomeSelectExchangeButtonContainer = styled.View`
  align-items: center;
`;

export const Home = () => {
  return (
    <Background>
      <HeaderBar text="Fat Buck" showBeta />

      <HomeSelectExchangeButtonContainer>
        <SelectExchangeButton />
      </HomeSelectExchangeButtonContainer>

      <StockList />

      <ExchangesModal />
    </Background>
  );
};
