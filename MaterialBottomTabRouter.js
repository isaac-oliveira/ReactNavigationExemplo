import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './pages/Home'
import Second from './pages/Second'

const MaterialBottomTab = createMaterialBottomTabNavigator();

const MaterialBottomTabRouter = () => {
  return (
    <MaterialBottomTab.Navigator>
      <MaterialBottomTab.Screen name="Home" component={Home} />
    </MaterialBottomTab.Navigator>
  )
}

export default MaterialBottomTabRouter;