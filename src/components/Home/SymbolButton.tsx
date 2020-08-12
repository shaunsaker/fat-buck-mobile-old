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

const SymbolButtonContainer = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 0 ${BUTTON_CONTAINER_BORDER_RADIUS}px;
`;

const SymbolButtonNameContainer = styled.View`
  width: 72px;
`;

const SymbolButtonText = styled.Text`
  font-family: 'Recursive-Bold';
  font-size: 18px;
  color: ${colors.white};
`;

const SymbolButtonChipContainer = styled.View``;

const SymbolButtonReturnContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export interface SymbolButtonProps {
  name: string;
  instruction: Instructions;
  expectedReturn: number;
  onPress: () => void;
}

export const SymbolButton = ({
  name,
  instruction,
  expectedReturn,
  onPress,
}: SymbolButtonProps) => {
  return (
    <ButtonContainer>
      {/* TODO: disable these buttons until we release the Symbol page feature */}
      <SymbolButtonContainer onPress={onPress} disabled>
        <SymbolButtonNameContainer>
          <SymbolButtonText>{name}</SymbolButtonText>
        </SymbolButtonNameContainer>

        <SymbolButtonChipContainer>
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
        </SymbolButtonChipContainer>

        <SymbolButtonReturnContainer>
          <SymbolButtonText>{expectedReturn}%</SymbolButtonText>
        </SymbolButtonReturnContainer>
      </SymbolButtonContainer>
    </ButtonContainer>
  );
};
