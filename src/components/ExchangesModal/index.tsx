import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { colors } from '../../colors';
import { LabelKinds, Label } from '../Label';
import { CloseButton } from '../CloseButton';
import { ExchangeList } from './ExchangeList';
import { selectExchangesModalIsOpen } from '../../exchangesModal/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setExchangesModelIsOpen } from '../../store/actions';

const ExchangesModalContainer = styled.View``;

const ExchangesModalContentContainer = styled.View`
  background-color: ${colors.black};
  margin: 0 20px;
  border-width: 3px;
  border-style: solid;
  border-color: ${colors.yellow};
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  max-width: 320px;
`;

const ExchangesModalLabelContainer = styled.View`
  align-items: center;
  margin-bottom: 5px;
`;

const ExchangesModalCloseIconContainer = styled.View`
  position: absolute;
  top: 17px;
  right: 17px;
`;

interface ExchangesModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ExchangesModalBase = ({ isOpen, handleClose }: ExchangesModalProps) => {
  return (
    <ExchangesModalContainer>
      <Modal
        isVisible={isOpen}
        backdropColor={colors.black}
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        useNativeDriver
        hideModalContentWhileAnimating>
        <ExchangesModalContentContainer>
          <ExchangesModalLabelContainer>
            <Label kind={LabelKinds.primary}>Select an Exchange</Label>
          </ExchangesModalLabelContainer>

          <ExchangesModalCloseIconContainer>
            <CloseButton handlePress={handleClose} />
          </ExchangesModalCloseIconContainer>

          <ExchangeList />
        </ExchangesModalContentContainer>
      </Modal>
    </ExchangesModalContainer>
  );
};

export const ExchangesModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectExchangesModalIsOpen);

  const onClose = useCallback(() => {
    dispatch(setExchangesModelIsOpen(false));
  }, [dispatch]);

  return <ExchangesModalBase isOpen={isOpen} handleClose={onClose} />;
};
