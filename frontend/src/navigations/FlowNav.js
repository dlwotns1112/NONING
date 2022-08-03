import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Flows from '../components/flow/Flows';
import FlowScreen from '../screens/bottomTab/FlowScreen';
import DetailScreen from '../screens/board/DetailScreen';
import UserPageScreen from '../screens/bottomTab/UserPageScreen';
import LoginNav from './LoginNav';

const Stack = createNativeStackNavigator();

export default function FlowNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FlowScreen" component={FlowScreen} options={{headerShown: false}}  />
      <Stack.Screen name="Flows" component={Flows} options={{headerShown: false}}  />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerBackVisible: true, headerBackTitleVisible: false}}
      />
      <Stack.Screen
        name="UserPageScreen"
        component={UserPageScreen}
        options={{headerBackVisible: true, headerBackTitleVisible: false}}
      />
      <Stack.Screen
        name="LoginNav"
        component={LoginNav}
        options={{
          title: '로그인',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
