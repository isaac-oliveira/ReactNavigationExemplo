import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

const Second = () => {
  const navigation = useNavigation();
  const route = useRoute()

  return (
    <View>
      <Text>Second: {route.params.text}</Text>
      <Button title="To Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Second;
