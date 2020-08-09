import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Background } from './components/Background';
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
