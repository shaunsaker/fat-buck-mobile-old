import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../colors';

export const BUTTON_CONTAINER_BORDER_RADIUS = 30;

const ButtonContainerGradient = styled(LinearGradient)`
  border-radius: ${BUTTON_CONTAINER_BORDER_RADIUS}px;
`;

interface ButtonContainerInnerContainerProps {
  active?: boolean;
}

const ButtonContainerInnerContainer = styled.View<
  ButtonContainerInnerContainerProps
>`
  border-width: 3px;
  border-style: solid;
  border-radius: ${BUTTON_CONTAINER_BORDER_RADIUS}px;
  height: ${BUTTON_CONTAINER_BORDER_RADIUS * 2}px;
  border-color: ${({ active }) => (active ? colors.yellow : colors.grey)};
`;

interface ButtonContainerProps {
  active?: boolean;
  children?: ReactNode;
}

export const ButtonContainer = ({ active, children }: ButtonContainerProps) => {
  return (
    <ButtonContainerGradient
      start={{ x: 0, y: 0.25 }}
      end={{ x: 1.5, y: 1.5 }}
      colors={[colors.transWhite, colors.lightGreen, colors.black]}>
      <ButtonContainerInnerContainer active={active}>
        {children}
      </ButtonContainerInnerContainer>
    </ButtonContainerGradient>
  );
};
