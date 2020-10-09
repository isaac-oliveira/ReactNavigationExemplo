import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home'
import Second from './pages/Second'

const Drawer = createDrawerNavigator();

function DrawerRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Second" component={Second} />
    </Drawer.Navigator>
  )
}

export default DrawerRouter;