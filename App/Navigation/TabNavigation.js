import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Pages/HomeScreen';
import Profile from '../Pages/Profile';
import MyCourse from '../Pages/MyCourse';
import LeaderBoard from '../Pages/LeaderBoard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown : false}}>
        <Tab.Screen name="home" component={HomeScreenNavigation} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="my-course" component={MyCourse} 
        options={{
          tabBarLabel: 'My Course',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        
        }}
        />
        <Tab.Screen name="leader-board" component={LeaderBoard} 
        options={{
          tabBarLabel: 'Leader Board',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="profile" component={Profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        />
    </Tab.Navigator>
  )
}