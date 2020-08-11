import React, { useCallback, ReactNode } from 'react';
import styled from 'styled-components/native';
import Logo from './Logo';
import Button, { ButtonKinds } from './Button';
import { Label, LabelKinds } from './Label';
import { colors } from '../colors';
import CloseIcon from '../icons/close.svg';
import { TouchableIcon } from './TouchableIcon';
import pkg from '../../package.json';
import RNSideMenu, { ReactNativeSideMenuProps } from 'react-native-side-menu';
import { Animated } from 'react-native';
import { Background } from './Background';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsSideMenuOpen } from '../sideMenu/selectors';
import { setSideMenuIsOpen, signOut } from '../store/actions';
import { useLinking } from './useLinking';
import { config } from '../config';
import { selectIsAuthenticated } from '../auth/selectors';

const SideMenuContainer = styled.SafeAreaView`
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

const SideMenuCloseIconContainer = styled(TouchableIcon)``;

const SideMenuContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 20px;
`;

const SideMenuButtonContainer = styled.View`
  margin-bottom: 20px;
`;

const SideMenuVersionContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

interface SideMenuComponentProps {
  version: string;
  isAuthenticated: boolean;
  handleClose: () => void;
  handleGetInTouch: () => void;
  handleSignOut: () => void;
}

const SideMenuComponent = ({
  version,
  isAuthenticated,
  handleClose,
  handleGetInTouch,
  handleSignOut,
}: SideMenuComponentProps) => {
  return (
    <Background>
      <SideMenuContainer>
        <SideMenuHeaderContainer>
          <SideMenuLogoContainer>
            <Logo />
          </SideMenuLogoContainer>

          <SideMenuCloseIconContainer onPress={handleClose}>
            <CloseIcon width={24} height={24} fill={colors.white} />
          </SideMenuCloseIconContainer>
        </SideMenuHeaderContainer>

        <SideMenuContentContainer>
          <SideMenuButtonContainer>
            <Button kind={ButtonKinds.primary} onPress={handleGetInTouch}>
              GET IN TOUCH
            </Button>
          </SideMenuButtonContainer>

          {isAuthenticated ? (
            <SideMenuButtonContainer>
              <Button kind={ButtonKinds.secondary} onPress={handleSignOut}>
                SIGN OUT
              </Button>
            </SideMenuButtonContainer>
          ) : null}

          <SideMenuVersionContainer>
            <Label kind={LabelKinds.primary}>{version}</Label>
          </SideMenuVersionContainer>
        </SideMenuContentContainer>
      </SideMenuContainer>
    </Background>
  );
};

interface SideMenuBaseProps extends ReactNativeSideMenuProps {
  children: ReactNode;
  handleSideMenuChange: (nextIsOpen: boolean) => void;
}

const SideMenuBase = ({
  menu,
  isOpen,
  children,
  handleSideMenuChange,
}: SideMenuBaseProps) => {
  return (
    <RNSideMenu
      menu={menu}
      isOpen={isOpen}
      onChange={handleSideMenuChange}
      openMenuOffset={300}
      bounceBackOnOverdraw={false}
      animationFunction={(prop: any, value: any) =>
        Animated.spring(prop, {
          toValue: value,
          friction: 20,
          useNativeDriver: true,
        })
      }>
      {children}
    </RNSideMenu>
  );
};

interface SideMenuProps {
  children: ReactNode;
}

export const SideMenu = ({ children }: SideMenuProps) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsSideMenuOpen);
  const { openLink } = useLinking();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const onSideMenuChange = useCallback(
    (nextIsOpen: boolean) => {
      dispatch(setSideMenuIsOpen(nextIsOpen));
    },
    [dispatch],
  );

  const onClose = useCallback(() => {
    dispatch(setSideMenuIsOpen(false));
  }, [dispatch]);

  const onGetInTouch = useCallback(() => {
    openLink(`mailto:${config.contactEmail}`);
  }, [openLink]);

  const onSignOut = useCallback(() => {
    dispatch(signOut());
  }, []);

  return (
    <SideMenuBase
      menu={
        <SideMenuComponent
          version={`v${pkg.version}`}
          isAuthenticated={isAuthenticated}
          handleClose={onClose}
          handleGetInTouch={onGetInTouch}
          handleSignOut={onSignOut}
        />
      }
      isOpen={isOpen}
      handleSideMenuChange={onSideMenuChange}>
      {children}
    </SideMenuBase>
  );
};
