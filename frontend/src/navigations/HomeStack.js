import React, {useContext} from 'react';
import HomeScreen from '../screens/bottomTab/HomeScreen';
import DetailScreen from '../screens/board/DetailScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginNav from './LoginNav';
import SearchNav from './SearchNav';
import UserContext from '../util/UserContext';
import YourPageScreen from '../screens/YourPageScreen';
import FollowerScreen from '../screens/FollowerScreen';
import FollowingScreen from '../screens/FollowingScreen';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeStack() {
  const {userData} = useContext(UserContext);
  return (
    <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
      {userData === null ? ( // 로그인 X
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginNav"
            component={LoginNav}
            options={{
              title: '로그인',
              headerShown: false,
              headerBackImageSource: (
                <Feather name="chevron-left" size={30} color="#000000" />
              ),
            }}
          />
          <Stack.Screen
            name="SearchNav"
            component={LoginNav}
            options={HeaderOptions('로그인')}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={HeaderOptions('상세페이지')}
          />
          <Stack.Screen
            name="YourPageScreen"
            component={LoginNav}
            options={HeaderOptions('로그인')}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchNav"
            component={SearchNav}
            options={HeaderOptions('검색')}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={HeaderOptions('상세페이지')}
          />
          <Stack.Screen
            name="YourPageScreen"
            component={YourPageScreen}
            options={HeaderOptions('유저페이지')}
          />
          <Stack.Screen
            name="FollowerScreen"
            component={FollowerScreen}
            options={HeaderOptions('Follower')}
          />
          <Stack.Screen
            name="FollowingScreen"
            component={FollowingScreen}
            options={HeaderOptions('Following')}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default HomeStack;
