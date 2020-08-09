import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import LinearGradient from 'react-native-linear-gradient';
import { Touchable } from './Touchable';

const ButtonContainer = styled(Touchable)`
  width: 152px;
  height: 40px;
  border-width: 3px;
  border-style: solid;
  border-color: ${colors.green};
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
  children: string;
  onPress: () => void;
}

export const Button = ({ onPress, children }: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonGradient
        start={{ x: 0, y: 0.25 }}
        end={{ x: 1.5, y: 1.5 }}
        colors={[colors.green, colors.blue, colors.black]}>
        <ButtonText>{children}</ButtonText>
      </ButtonGradient>
    </ButtonContainer>
  );
};

export default Button;
