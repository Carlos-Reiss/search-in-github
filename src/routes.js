import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import Users from './pages/users';

const stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerTintColor: '#FFF',
          headerStyle: { backgroundColor: '#666' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
          headerBackTitle: false,
        }}
      >
        <stack.Screen name="Main" component={Main} />
        <stack.Screen
          name="Users"
          component={Users}
          options={({ route }) => ({ title: route.params.user.name })}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
