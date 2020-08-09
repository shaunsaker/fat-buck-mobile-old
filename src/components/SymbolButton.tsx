import React from 'react';
import styled from 'styled-components/native';
import Chip, { ChipKinds } from './Chip';
import { colors } from '../colors';
import { Touchable } from './Touchable';
import { Instructions } from '../models';
import LinearGradient from 'react-native-linear-gradient';

const BORDER_RADIUS = 30;

const SymbolButtonGradient = styled(LinearGradient)`
  border-radius: ${BORDER_RADIUS}px;
`;

const SymbolButtonContainer = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  border-width: 3px;
  border-style: solid;
  border-color: ${colors.grey};
  border-radius: ${BORDER_RADIUS}px;
  height: ${BORDER_RADIUS * 2}px;
  padding: 0 ${BORDER_RADIUS}px;
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
    <SymbolButtonGradient
      start={{ x: 0, y: 0.25 }}
      end={{ x: 1.5, y: 1.5 }}
      colors={[colors.transWhite, colors.lightGreen, colors.black]}>
      <SymbolButtonContainer onPress={onPress}>
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
    </SymbolButtonGradient>
  );
};
