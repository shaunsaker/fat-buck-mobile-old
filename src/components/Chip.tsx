import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';

const ChipContainer = styled.View`
  background-color: ${colors.lightGreen};
  padding: 5px 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export enum ChipKinds {
  primary,
  secondary,
  tertiary,
}

interface ChipTextProps {
  kind: ChipKinds;
}

const ChipText = styled.Text<ChipTextProps>`
  font-family: 'Recursive-Bold';
  font-size: 16px;
  color: ${({ kind }) =>
    kind === ChipKinds.primary
      ? colors.green
      : kind === ChipKinds.secondary
      ? colors.yellow
      : colors.red};
`;

export interface ChipProps {
  kind: ChipKinds;
  children: string;
}

export const Chip = ({ kind, children }: ChipProps) => {
  return (
    <ChipContainer>
      <ChipText kind={kind}>{children}</ChipText>
    </ChipContainer>
  );
};

export default Chip;
