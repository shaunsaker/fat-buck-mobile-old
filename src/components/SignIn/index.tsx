import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { HeaderBar } from '../HeaderBar';
import { Input } from '../Input';
import Button, { ButtonKinds } from '../Button';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../auth/actions';
import { selectIsAuthLoading } from '../../auth/selectors';
import { Background } from '../Background';

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
  isLoading: boolean;
  isDisabled: boolean;
  email: string;
  handleChangeEmail: (email: string) => void;
  password: string;
  handleChangePassword: (password: string) => void;
  handleDismissKeyboard: () => void;
  handleSubmit: () => void;
}

const SignInBase = ({
  isLoading,
  isDisabled,
  email,
  handleChangeEmail,
  password,
  handleChangePassword,
  handleSubmit,
  handleDismissKeyboard,
}: SignInBaseProps) => {
  return (
    <Background>
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
                <Button
                  kind={ButtonKinds.primary}
                  loading={isLoading}
                  disabled={isDisabled}
                  onPress={handleSubmit}>
                  SUBMIT
                </Button>
              </SignInButtonContainer>
            </SignInFormInnerContainer>
          </TouchableWithoutFeedback>
        </SignInFormContainer>
      </SignInContainer>
    </Background>
  );
};

export const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(selectIsAuthLoading);
  const isDisabled = isLoading || !email || !password;

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onDismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onSubmit = useCallback(() => {
    Keyboard.dismiss();
    dispatch(signIn(email, password));
  }, [dispatch, email, password]);

  return (
    <SignInBase
      isLoading={isLoading}
      isDisabled={isDisabled}
      email={email}
      handleChangeEmail={onChangeEmail}
      password={password}
      handleChangePassword={onChangePassword}
      handleDismissKeyboard={onDismissKeyboard}
      handleSubmit={onSubmit}
    />
  );
};
