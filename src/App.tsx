import React from 'react';
import { StatusBar } from 'react-native';
import { SideMenu } from './components/SideMenu';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { Router } from './Router';

declare const global: { HermesInternal: null | {} };

const App = () => {
  // useEffect(() => {
  //   persistor.purge();
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <SideMenu>
          <Router />
        </SideMenu>
      </PersistGate>
    </Provider>
  );
};

export default App;
