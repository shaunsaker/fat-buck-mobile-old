import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { colors } from '../../colors';
import { LabelKinds, Label } from '../Label';
import { CloseButton } from '../CloseButton';
import { ExchangeList } from './ExchangeList';

const ExchangesModalContainer = styled.View``;

const ExchangesModalContentContainer = styled.View`
  background-color: ${colors.lightGreen};
  margin: 0 20px;
  border-width: 3px;
  border-style: solid;
  border-color: ${colors.green};
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
`;

const ExchangesModalLabelContainer = styled.View`
  align-items: center;
`;

const ExchangesModalCloseIconContainer = styled.View`
  position: absolute;
  top: 17;
  right: 17;
`;

interface ExchangesModalProps {
  handleClose: () => void;
}

const ExchangesModalBase = ({ handleClose }: ExchangesModalProps) => {
  return (
    <ExchangesModalContainer>
      <Modal isVisible>
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
  const onClose = useCallback(() => {}, []);

  return <ExchangesModalBase handleClose={onClose} />;
};
