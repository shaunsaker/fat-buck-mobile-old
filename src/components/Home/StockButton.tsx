import React from 'react';
import styled from 'styled-components/native';
import Chip, { ChipKinds } from '../Chip';
import { colors } from '../../colors';
import { Touchable } from '../Touchable';
import { Instructions } from '../../models';
import {
  ButtonContainer,
  BUTTON_CONTAINER_BORDER_RADIUS,
} from '../ButtonContainer';

const StockButtonContainer = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 0 ${BUTTON_CONTAINER_BORDER_RADIUS}px;
`;

const StockButtonNameContainer = styled.View`
  width: 72px;
`;

const StockButtonText = styled.Text`
  font-family: 'Recursive-Bold';
  font-size: 18px;
  color: ${colors.white};
`;

const StockButtonChipContainer = styled.View``;

const StockButtonReturnContainer = styled.View`
  flex: 1;
  align-items: flex-end;
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
    <ButtonContainer>
      {/* TODO: disable these buttons until we release the Stock page feature */}
      <StockButtonContainer onPress={onPress} disabled>
        <StockButtonNameContainer>
          <StockButtonText>{name}</StockButtonText>
        </StockButtonNameContainer>

        <StockButtonChipContainer>
          <Chip
            kind={
              instruction === Instructions.buy
                ? ChipKinds.primary
                : instruction === Instructions.hold
                ? ChipKinds.secondary
                : ChipKinds.tertiary
            }>
            {instruction}
          </Chip>
        </StockButtonChipContainer>

        <StockButtonReturnContainer>
          <StockButtonText>{expectedReturn}%</StockButtonText>
        </StockButtonReturnContainer>
      </StockButtonContainer>
    </ButtonContainer>
  );
};
