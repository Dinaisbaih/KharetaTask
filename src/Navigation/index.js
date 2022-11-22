import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './StackNavigators/HomeStack';

const RootStackNavigation = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default RootStackNavigation;
