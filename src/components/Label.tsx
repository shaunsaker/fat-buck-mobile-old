import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';

export enum LabelKinds {
  primary,
  secondary,
}

interface LabelTextProps {
  kind: LabelKinds;
}

const LabelText = styled.Text<LabelTextProps>`
  font-family: 'Recursive-Regular';
  font-size: 16px;
  color: ${({ kind }) =>
    kind === LabelKinds.primary ? colors.white : colors.grey};
`;

interface LabelProps {
  kind: LabelKinds;
  children: ReactNode;
}

export const Label = ({ kind, children }: LabelProps) => {
  return <LabelText kind={kind}>{children}</LabelText>;
};
