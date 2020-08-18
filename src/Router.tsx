import React, { useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from './components/SignIn';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './auth/selectors';
import { Home } from './components/Home';

const Stack = createStackNavigator();

export const Router = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    enableScreens();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        {isAuthenticated ? (
          <Stack.Screen name="home" component={Home} />
        ) : (
          <Stack.Screen
            name="signIn"
            component={SignIn}
            options={{ animationEnabled: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
