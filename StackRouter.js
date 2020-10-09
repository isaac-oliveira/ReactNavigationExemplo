import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import MaterialBottomTabRouter from './MaterialBottomTabRouter'
import Second from './pages/Second'

const Stack = createStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MaterialBottom" component={MaterialBottomTabRouter} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
}

export default StackRouter;

