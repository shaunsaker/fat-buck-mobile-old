import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';

export enum ChipKinds {
  primary,
  secondary,
  tertiary,
}

interface ChipContainerProps {
  kind: ChipKinds;
}

const ChipContainer = styled.View<ChipContainerProps>`
  width: 86px;
  height: 33px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightGreen};
  border-width: 3px;
  border-style: solid;
  border-radius: 20px;
  border-color: ${({ kind }) =>
    kind === ChipKinds.primary
      ? colors.green
      : kind === ChipKinds.secondary
      ? colors.yellow
      : colors.red};
`;

const ChipText = styled.Text`
  font-family: 'Recursive-Bold';
  font-size: 14px;
  color: ${colors.white};
`;

export interface ChipProps {
  kind: ChipKinds;
  children: string;
}

export const Chip = ({ kind, children }: ChipProps) => {
  return (
    <ChipContainer kind={kind}>
      <ChipText>{children}</ChipText>
    </ChipContainer>
  );
};

export default Chip;
