import React from 'react';
import styled, { css } from 'styled-components/native';
import { colors } from '../colors';
import LinearGradient from 'react-native-linear-gradient';
import { Touchable } from './Touchable';

export enum ButtonKinds {
  primary,
  secondary,
}

interface ButtonContainerProps {
  kind: ButtonKinds;
}

const ButtonContainer = styled(Touchable)<ButtonContainerProps>`
  width: 152px;
  height: 40px;
  border-width: 3px;
  border-style: solid;
  border-color: ${({ kind }) =>
    kind === ButtonKinds.primary ? colors.green : colors.grey};
  border-radius: 20px;
`;

const ButtonCss = css`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const ButtonGradient = styled(LinearGradient)`
  ${ButtonCss}
`;

const ButtonBackground = styled.View`
  ${ButtonCss}
`;

const ButtonText = styled.Text`
  font-family: 'Recursive-Bold';
  font-size: 16px;
  color: ${colors.white};
`;

interface ButtonProps {
  kind: ButtonKinds;
  children: string;
  onPress: () => void;
}

export const Button = ({ kind, onPress, children }: ButtonProps) => {
  return (
    <ButtonContainer kind={kind} onPress={onPress}>
      {kind === ButtonKinds.primary ? (
        <ButtonGradient
          start={{ x: 0, y: 0.25 }}
          end={{ x: 1.5, y: 1.5 }}
          colors={[colors.green, colors.blue, colors.black]}>
          <ButtonText>{children}</ButtonText>
        </ButtonGradient>
      ) : (
        <ButtonBackground>
          <ButtonText>{children}</ButtonText>
        </ButtonBackground>
      )}
    </ButtonContainer>
  );
};

export default Button;
