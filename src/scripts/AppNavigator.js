import React from 'react';
import HomeScreen1 from './screens/MainHomeScreen';
import ProfileScreen1 from './screens/profileScreen1';
import HomeAddScreen from './screens/AddSurveyScreen';
import ThirdScreen from './screens/SF36Screen';
import SF12Screen from './screens/SF12Screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen1"
        component={HomeScreen1}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AddSurvey = props => {
  console.log(props);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeAddScreen"
        component={HomeAddScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="thirdScreen" options={{title: 'SF-36'}}>
        {props => <ThirdScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SF12Screen" options={{title: 'SF-12'}}>
        {props => <SF12Screen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profileScreen1"
        component={ProfileScreen1}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const RootStackNavigator = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add"
          component={AddSurvey}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
