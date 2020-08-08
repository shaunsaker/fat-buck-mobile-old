import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';

const LabelText = styled.Text`
  font-family: 'Recursive-Regular';
  font-size: 16px;
  color: ${colors.grey};
`;

interface LabelProps {
  children: ReactNode;
}

export const Label = ({ children }: LabelProps) => {
  return <LabelText>{children}</LabelText>;
};
