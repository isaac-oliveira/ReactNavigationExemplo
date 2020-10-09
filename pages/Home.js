import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button title="To Second" onPress={() => navigation.navigate('Second', {
        text: "Hello Second 2"
      })}/>
    </View>
  );
};

export default Home;
