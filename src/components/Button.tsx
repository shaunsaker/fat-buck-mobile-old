import React from 'react';
import styled from 'styled-components/native';
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
    kind === ButtonKinds.primary ? colors.green : colors.transWhite};
  border-radius: 20px;
`;

const ButtonGradient = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
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
      <ButtonGradient
        start={{ x: 0, y: 0.25 }}
        end={{ x: 1.5, y: 1.5 }}
        colors={[
          kind === ButtonKinds.primary ? colors.green : colors.lightGreen,
          colors.blue,
          colors.black,
        ]}>
        <ButtonText>{children}</ButtonText>
      </ButtonGradient>
    </ButtonContainer>
  );
};

export default Button;
