import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarStyle: {backgroundColor: "#000", height: 60, paddingBottom: 10},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: "#8e8e8e",
        headerShown: false
    }}
    >
    <Tabs.Screen
    name="index"
    options={{
        title: "Home",
        tabBarIcon: ({color, focused}) => (<Octicons name="home" size={24} color={focused ? color : "#8e8e8e"} />)
    }}
    />
    <Tabs.Screen
    name="search-page"
    options={{
        title: "Search",
        tabBarIcon: ({color, focused}) => (<Feather name="search" size={24} color={focused ? color : "#8e8e8e"} />)
    }}
    />
    <Tabs.Screen
    name="library-page"
    options={{
        title: "Your Library",
        tabBarIcon: ({color, focused}) => (<Ionicons name="library-outline" size={24} color={focused ? color : "#8e8e8e"} />)
    }}
    />
    </Tabs>
  )
}

export default Layout