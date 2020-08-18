import React from 'react';
import styled from 'styled-components/native';
import LogoSvg from '../icons/logo.svg';

const LogoContainer = styled(LogoSvg)``;

export const Logo = () => {
  return <LogoContainer width={40} />;
};

export default Logo;
