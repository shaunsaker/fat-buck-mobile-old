import React from 'react';
import styled from 'styled-components/native';
import Chip, { ChipKinds } from '../Chip';
import { colors } from '../../colors';
import { Touchable } from '../Touchable';
import { Instructions } from '../../instructions/models';
import { STOCK_LIST_COLUMNS } from './StockList';

const StockButtonContainer = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 20px;
`;

const StockButtonItemContainer = styled.View``;

interface StockButtonTextProps {
  secondary?: boolean;
}

const StockButtonText = styled.Text<StockButtonTextProps>`
  font-family: 'Recursive-Bold';
  font-size: 18px;
  color: ${({ secondary }) => (secondary ? colors.grey : colors.white)};
`;

export interface StockButtonProps {
  name: string;
  instruction: Instructions;
  expectedReturn: number;
  onPress: () => void;
}

export const StockButton = ({
  name,
  instruction,
  expectedReturn,
  onPress,
}: StockButtonProps) => {
  return (
    // {/* TODO: disable these buttons until we release the Stock page feature */}
    <StockButtonContainer onPress={onPress} disabled>
      <StockButtonItemContainer style={STOCK_LIST_COLUMNS.name.style}>
        <StockButtonText>{name}</StockButtonText>
      </StockButtonItemContainer>

      <StockButtonItemContainer style={STOCK_LIST_COLUMNS.instruction.style}>
        <Chip
          kind={
            instruction === Instructions.buy
              ? ChipKinds.primary
              : ChipKinds.secondary
          }>
          {instruction}
        </Chip>
      </StockButtonItemContainer>

      <StockButtonItemContainer style={STOCK_LIST_COLUMNS.return.style}>
        <StockButtonText>
          {expectedReturn}
          <StockButtonText secondary> %</StockButtonText>
        </StockButtonText>
      </StockButtonItemContainer>
    </StockButtonContainer>
  );
};
