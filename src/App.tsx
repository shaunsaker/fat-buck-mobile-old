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

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Background>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={{ flex: 1 }}>
        <HeaderBar handleMenuPress={() => {}} />

        <Logo />

        <Chip kind={ChipKinds.primary}>BUY</Chip>
        <Chip kind={ChipKinds.secondary}>HOLD</Chip>
        <Chip kind={ChipKinds.tertiary}>SELL</Chip>

        <Button onPress={() => {}}>Exchange: US</Button>

        <Label kind={LabelKinds.primary}>Expected % Return</Label>
        <Label kind={LabelKinds.secondary}>Expected % Return</Label>

        <SymbolButton
          name="AAPL"
          ChipProps={{ kind: ChipKinds.primary, children: 'BUY' }}
          expectedReturn={27}
          onPress={() => {}}
        />

        <View style={{ width: 320, flex: 1 }}>
          <SideMenu
            version="v1.0.0 (2)"
            handleClose={() => {}}
            handleGetInTouch={() => {}}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default App;
