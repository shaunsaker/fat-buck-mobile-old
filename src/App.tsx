import React from 'react';
import { Logo } from './components/Logo';
import { SafeAreaView, StatusBar } from 'react-native';
import Chip, { ChipKinds } from './components/Chip';
import { Background } from './components/Background';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Background>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={{ flex: 1 }}>
        <Logo />

        <Chip kind={ChipKinds.primary}>BUY</Chip>
        <Chip kind={ChipKinds.secondary}>HOLD</Chip>
        <Chip kind={ChipKinds.tertiary}>SELL</Chip>
      </SafeAreaView>
    </Background>
  );
};

export default App;
