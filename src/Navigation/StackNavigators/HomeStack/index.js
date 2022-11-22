import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharacterDetails from '../../../Screens/Home/CharacterDetails';
import Home from '../../../Screens/Home';

const HomeStack = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  return (
    <Navigator screenOptions={{headerShown: true}}>
      <Screen options={{headerShown: false}} name="Home" component={Home} />
      <Screen
        options={{
          headerShown: false,
          headerTitle: 'Character Info',
          headerTitleStyle: {color: '#496350', fontWeight: 'bold'},
          headerBackTitle: '',
          headerTintColor: '#496350',
          headerStyle: {backgroundColor: '#dbe8e5'},
        }}
        name="CharacterDetails"
        component={CharacterDetails}
      />
    </Navigator>
  );
};

export default HomeStack;
