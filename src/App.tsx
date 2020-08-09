import React from 'react';
import { Logo } from './components/Logo';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Chip, { ChipKinds } from './components/Chip';
import { Background } from './components/Background';
import Button from './components/Button';
import { Label, LabelKinds } from './components/Label';
import { SymbolButton } from './components/SymbolButton';
import { SideMenu } from './components/SideMenu';
import { HeaderBar } from './components/HeaderBar';
import { Home } from './components/Home';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Background>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </Background>
  );
};

export default App;
