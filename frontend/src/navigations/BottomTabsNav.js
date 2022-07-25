import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import PlusScreen from '../screens/bottomtab/PlusScreen';
import MyPageScreen from '../screens/bottomtab/MyPageScreen';
import HomeStack from './HomeStack';
import FlowNav from './FlowNav';
import LiveNav from './LiveNav';

const Tab = createBottomTabNavigator();
const tabBarListeners = ({navigation, route}) => ({
  tabPress: () => navigation.navigate(route.name),
});
function BottomTabsNav() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          title: '논잉',
          headerShown: false,
        }}
        listeners={tabBarListeners}
      />
      <Tab.Screen
        name="FlowNav"
        component={FlowNav}
        options={{
          tabBarLabel: 'Flow',
          headerShown: false,
        }}
        listeners={tabBarListeners}
      />
      <Tab.Screen
        name="PlusScreen"
        component={PlusScreen}
        options={{
          tabBarLabel: 'Plus',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LiveNav"
        component={LiveNav}
        options={{
          tabBarLabel: 'Live',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          tabBarLabel: 'MyPage',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabsNav;
