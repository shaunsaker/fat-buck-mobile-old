import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import MenuIcon from '../icons/menu.svg';
import Logo from './Logo';
import { colors } from '../colors';
import { TouchableIcon } from './TouchableIcon';
import { useDispatch } from 'react-redux';
import { setSideMenuIsOpen } from '../store/actions';

const HeaderBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const HeaderBarAlignmentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const HeaderBarMenuIconContainer = styled(TouchableIcon)`
  margin-right: 20px;
`;

const HeaderBarText = styled.Text`
  font-family: 'Recursive-Bold';
  font-size: 24px;
  color: ${colors.white};
`;

interface HeaderBarBaseProps extends HeaderBarProps {
  handleMenuPress: () => void;
}

const HeaderBarBase = ({ text, handleMenuPress }: HeaderBarBaseProps) => {
  return (
    <HeaderBarContainer>
      <HeaderBarAlignmentContainer>
        <HeaderBarMenuIconContainer onPress={handleMenuPress}>
          <MenuIcon width={24} height={24} fill={colors.white} />
        </HeaderBarMenuIconContainer>

        <Logo />
      </HeaderBarAlignmentContainer>

      <HeaderBarText>{text}</HeaderBarText>

      <HeaderBarAlignmentContainer />
    </HeaderBarContainer>
  );
};

interface HeaderBarProps {
  text?: string;
}

export const HeaderBar = (props: HeaderBarProps) => {
  const dispatch = useDispatch();

  const onMenuPress = useCallback(() => {
    dispatch(setSideMenuIsOpen(true));
  }, [dispatch]);

  return <HeaderBarBase {...props} handleMenuPress={onMenuPress} />;
};
