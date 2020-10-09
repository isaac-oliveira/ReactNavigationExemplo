import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './pages/Home';
import Second from './pages/Second';

const TopTab = createMaterialTopTabNavigator();

const TopTabRouter = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={Home} />
      <TopTab.Screen name="Second" component={Second} />
    </TopTab.Navigator>
  );
};

export default TopTabRouter
