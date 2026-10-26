import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../types';
import { colors } from '../theme';
import HomeScreen from '../screens/HomeScreen';
import TripScreen from '../screens/TripScreen';
import PhotoDetailScreen from '../screens/PhotoDetailScreen';

// O generic garante tipagem forte em navigate(), route.params etc.
const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '700' },
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Baú de Recordações' }}
        />
        {/* O título de Trip é definido dinamicamente dentro da própria tela */}
        <Stack.Screen
          name="Trip"
          component={TripScreen}
          options={{ title: 'Viagem' }}
        />
        <Stack.Screen
          name="PhotoDetail"
          component={PhotoDetailScreen}
          options={{ title: 'Detalhes da foto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
