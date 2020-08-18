import React from 'react';
import styled from 'styled-components/native';
import { HeaderBar } from '../HeaderBar';
import { SelectExchangeButton } from './SelectExchangeButton';
import { StockList } from './StockList';
import { ExchangesModal } from '../ExchangesModal';
import { Background } from '../Background';
import { SelectInstructionButton } from './SelectInstructionButton';
import { InstructionsModal } from '../InstructionsModal';

const HomeSelectButtonsContainer = styled.View`
  flex-direction: row;
  align-self: center;
`;

const HomeSelectButtonContainer = styled.View`
  margin: 0 10px;
`;

export const Home = () => {
  return (
    <Background>
      <HeaderBar text="Fat Buck" showBeta />

      <HomeSelectButtonsContainer>
        <HomeSelectButtonContainer>
          <SelectExchangeButton />
        </HomeSelectButtonContainer>

        <HomeSelectButtonContainer>
          <SelectInstructionButton />
        </HomeSelectButtonContainer>
      </HomeSelectButtonsContainer>

      <StockList />

      <ExchangesModal />

      <InstructionsModal />
    </Background>
  );
};
