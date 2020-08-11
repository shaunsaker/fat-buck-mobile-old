import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { HeaderBar } from '../HeaderBar';
import { Input } from '../Input';
import Button, { ButtonKinds } from '../Button';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const SignInContainer = styled.View`
  flex: 1;
`;

const SignInFormContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

const SignInFormInnerContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

const SignInInputContainer = styled.View`
  margin: 20px 20px 0;
`;

const SignInButtonContainer = styled.View`
  margin-top: 20px;
  align-self: center;
`;
interface SignInBaseProps {
  email: string;
  handleChangeEmail: (email: string) => void;
  password: string;
  handleChangePassword: (password: string) => void;
  handleDismissKeyboard: () => void;
  handleSubmit: () => void;
}

const SignInBase = ({
  email,
  handleChangeEmail,
  password,
  handleChangePassword,
  handleSubmit,
  handleDismissKeyboard,
}: SignInBaseProps) => {
  return (
    <SignInContainer>
      <HeaderBar text="Sign In" />

      <SignInFormContainer>
        <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
          <SignInFormInnerContainer>
            <SignInInputContainer>
              <Input
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={handleChangeEmail}
                onSubmitEditing={handleDismissKeyboard}
              />
            </SignInInputContainer>

            <SignInInputContainer>
              <Input
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={handleChangePassword}
                onSubmitEditing={handleSubmit}
              />
            </SignInInputContainer>

            <SignInButtonContainer>
              <Button kind={ButtonKinds.primary} onPress={handleSubmit}>
                SUBMIT
              </Button>
            </SignInButtonContainer>
          </SignInFormInnerContainer>
        </TouchableWithoutFeedback>
      </SignInFormContainer>
    </SignInContainer>
  );
};

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onDismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onSubmit = useCallback(() => {}, []);

  return (
    <SignInBase
      email={email}
      handleChangeEmail={onChangeEmail}
      password={password}
      handleChangePassword={onChangePassword}
      handleDismissKeyboard={onDismissKeyboard}
      handleSubmit={onSubmit}
    />
  );
};
