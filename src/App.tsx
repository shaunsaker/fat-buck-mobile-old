import React from 'react';
import { StatusBar } from 'react-native';
import { Background } from './components/Background';
import { Home } from './components/Home';
import { SideMenu } from './components/SideMenu';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

const AppContainer = styled.SafeAreaView`
  flex: 1;
`;

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" />

        <SideMenu>
          <Background>
            <AppContainer>
              <Home />
            </AppContainer>
          </Background>
        </SideMenu>
      </PersistGate>
    </Provider>
  );
};

export default App;
