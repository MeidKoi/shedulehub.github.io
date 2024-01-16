import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from "./components/Main";
import New from "./components/New";
import Start from "./components/Start";
import Registration2 from './components/Registration2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Начальное окно') {
              iconName = 'home';
            } else if (route.name === 'Регистрация') {
              iconName = 'person-add';
            } else if (route.name === 'Registration2') {
              iconName = 'person-add';
            } else if (route.name === 'New') {
              iconName = 'list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            style: {dsiplay: 'flex'},
          }}
      >
        <Tab.Screen name="Начальное окно" component={Start} options={{headerShown: false}} />
        <Tab.Screen name="Регистрация" component={Main} options={{headerShown: false}} />
        <Tab.Screen name="New" component={New} options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}