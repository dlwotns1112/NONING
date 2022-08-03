import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserPageScreen from '../screens/bottomTab/UserPageScreen';
import DetailScreen from '../screens/board/DetailScreen';
import SettingNav from './SettingNav';
import FollowerScreen from '../screens/FollowerScreen';
import VoteDo from '../components/userpage/VoteDo';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function UserPageNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="UserPageScreen" 
        component={UserPageScreen} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
          name="SettingNav"
          component={SettingNav}
          options={{
            title: '유저설정',
            headerShown: false,
          }}
        />
        <Stack.Screen name="FollowerScreen" component={FollowerScreen}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
    </Stack.Navigator>
  );
}

export default UserPageNav;
