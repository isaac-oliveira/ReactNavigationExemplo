import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home'
import Second from './pages/Second'

const BottomTab = createBottomTabNavigator();

const BottomTabRouter = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Second" component={Second} />
    </BottomTab.Navigator>
  )
}

export default BottomTabRouter;