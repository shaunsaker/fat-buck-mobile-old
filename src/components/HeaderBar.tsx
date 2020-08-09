import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import MenuIcon from '../icons/menu.svg';
import Logo from './Logo';
import { colors } from '../colors';
import { TouchableIcon } from './TouchableIcon';

const HeaderBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const HeaderBarMenuIconContainer = styled(TouchableIcon)`
  margin-right: 20px;
`;

const HeaderBarLogoContainer = styled.View``;

interface HeaderBarProps {
  handleMenuPress: () => void;
}

const HeaderBarBase = ({ handleMenuPress }: HeaderBarProps) => {
  return (
    <HeaderBarContainer>
      <HeaderBarMenuIconContainer onPress={handleMenuPress}>
        <MenuIcon width={24} height={24} fill={colors.white} />
      </HeaderBarMenuIconContainer>

      <HeaderBarLogoContainer>
        <Logo />
      </HeaderBarLogoContainer>
    </HeaderBarContainer>
  );
};

export const HeaderBar = () => {
  const onMenuPress = useCallback(() => {}, []);

  return <HeaderBarBase handleMenuPress={onMenuPress} />;
};
