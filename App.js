import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableHighlight, } from 'react-native';
import FirstScreen from './Screens/firstScreen'; 
import SecondScreen from './Screens/secondScreen'; 
import HomeScreen1 from './Screens/HomeScreen1'; 
// import ThirdScreen from './Screens/thirdScreen';
import ProfileScreen1 from './Screens/profileScreen1';
import HomeAddScreen from './Screens/homeAddScreen';
import ThirdScreen from './Screens/thirdScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen1" component={HomeScreen1} options = {{headerShown: false}}/>
    </Stack.Navigator>
  );
}
function AddSurvey() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homeAddScreen" component={HomeAddScreen}  options={{headerShown: false}}/>
      <Stack.Screen name="firstScreen" component={FirstScreen} options= {{title: "SF-36"}}/>
      <Stack.Screen name="secondScreen" component={SecondScreen} options= {{title: "SF-36"}}/>
      <Stack.Screen name="thirdScreen" component={ThirdScreen} options= {{title: "Third Screen"}}/>
    </Stack.Navigator>
  );
}
function ProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profileScreen1" component={ProfileScreen1} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Add" component={AddSurvey} options= {{headerShown: false}}/>
        <Stack.Screen name= "Profile" component={ProfileScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
