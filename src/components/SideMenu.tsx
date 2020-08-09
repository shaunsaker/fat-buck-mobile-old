import React from 'react';
import styled from 'styled-components/native';
import Logo from './Logo';
import Button from './Button';
import { Label, LabelKinds } from './Label';
import { colors } from '../colors';
import CloseIcon from '../icons/close.svg';

const SideMenuContainer = styled.View`
  flex: 1;
  border-right-width: 3px;
  border-style: solid;
  border-color: ${colors.grey};
`;

const SideMenuHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const SideMenuLogoContainer = styled.View``;

const SideMenuCloseContainer = styled.TouchableOpacity``;

const SideMenuContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 20px;
`;

const SideMenuButtonContainer = styled.View``;

const SideMenuVersionContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

interface SideMenuProps {
  version: string;
  handleClose: () => void;
  handleGetInTouch: () => void;
}

export const SideMenu = ({
  version,
  handleClose,
  handleGetInTouch,
}: SideMenuProps) => {
  return (
    <SideMenuContainer>
      <SideMenuHeaderContainer>
        <SideMenuLogoContainer>
          <Logo />
        </SideMenuLogoContainer>

        <SideMenuCloseContainer
          hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
          onPress={handleClose}>
          <CloseIcon width={24} height={24} fill={colors.white} />
        </SideMenuCloseContainer>
      </SideMenuHeaderContainer>

      <SideMenuContentContainer>
        <SideMenuButtonContainer>
          <Button onPress={handleGetInTouch}>Get in touch</Button>
        </SideMenuButtonContainer>

        <SideMenuVersionContainer>
          <Label kind={LabelKinds.primary}>{version}</Label>
        </SideMenuVersionContainer>
      </SideMenuContentContainer>
    </SideMenuContainer>
  );
};
