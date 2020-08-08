import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';

const SIZE = 50;
const LogoContainer = styled.View`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
  background-color: ${colors.grey};
`;

export const Logo = () => {
  return <LogoContainer />;
};

export default Logo;
