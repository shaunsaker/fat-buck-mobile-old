import React from 'react';
import styled, { css } from 'styled-components/native';
import { colors } from '../colors';
import LinearGradient from 'react-native-linear-gradient';
import { Touchable } from './Touchable';
import { ActivityIndicator } from 'react-native';

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
  border-width: ${({ kind }) => (kind === ButtonKinds.secondary ? 3 : 0)};
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
  loading?: boolean;
  disabled?: boolean;
  children: string;
  onPress: () => void;
}

export const Button = ({
  kind,
  loading,
  disabled,
  onPress,
  children,
}: ButtonProps) => {
  const childComponent = loading ? (
    <ActivityIndicator size="small" color={colors.white} />
  ) : (
    <ButtonText>{children}</ButtonText>
  );

  return (
    <ButtonContainer kind={kind} disabled={disabled} onPress={onPress}>
      {kind === ButtonKinds.primary ? (
        <ButtonGradient
          start={{ x: 0, y: 0.25 }}
          end={{ x: 1.5, y: 1.5 }}
          colors={[colors.green, colors.blue, colors.black]}>
          {childComponent}
        </ButtonGradient>
      ) : (
        <ButtonBackground>{childComponent}</ButtonBackground>
      )}
    </ButtonContainer>
  );
};

export default Button;
