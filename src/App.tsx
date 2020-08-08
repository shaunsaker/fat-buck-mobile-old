import React from 'react';
import { Logo } from './components/Logo';
import { SafeAreaView, StatusBar } from 'react-native';
import Chip, { ChipKinds } from './components/Chip';
import { Background } from './components/Background';
import Button from './components/Button';
import { Label } from './components/Label';
import { SymbolButton } from './components/SymbolButton';

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

        <Button onPress={() => {}}>Exchange: US</Button>

        <Label>Expected % Return</Label>

        <SymbolButton
          name="AAPL"
          ChipProps={{ kind: ChipKinds.primary, children: 'BUY' }}
          expectedReturn={27}
          onPress={() => {}}
        />
      </SafeAreaView>
    </Background>
  );
};

export default App;
