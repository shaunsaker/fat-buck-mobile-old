import React from 'react';
import styled from 'styled-components/native';
import Chip, { ChipProps as ChipPropsType } from './Chip';
import { colors } from '../colors';
import { Touchable } from './Touchable';

const BORDER_RADIUS = 30;
const SymbolButtonContainer = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  border-width: 3px;
  border-style: solid;
  border-color: ${colors.grey};
  border-radius: ${BORDER_RADIUS}px;
  height: ${BORDER_RADIUS * 2}px;
  padding: 0 ${BORDER_RADIUS}px;
  background-color: rgba(252, 252, 253, 0.17);
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

interface SymbolButtonProps {
  name: string;
  ChipProps: ChipPropsType;
  expectedReturn: number;
  onPress: () => void;
}

export const SymbolButton = ({
  name,
  ChipProps,
  expectedReturn,
  onPress,
}: SymbolButtonProps) => {
  return (
    <SymbolButtonContainer onPress={onPress}>
      <SymbolButtonNameContainer>
        <SymbolButtonText>{name}</SymbolButtonText>
      </SymbolButtonNameContainer>

      <SymbolButtonChipContainer>
        <Chip {...ChipProps} />
      </SymbolButtonChipContainer>

      <SymbolButtonReturnContainer>
        <SymbolButtonText>{expectedReturn}%</SymbolButtonText>
      </SymbolButtonReturnContainer>
    </SymbolButtonContainer>
  );
};
