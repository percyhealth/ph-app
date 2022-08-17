/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableHighlight,
} from 'react-native';
import FirstScreen from './screens/firstScreen';
import SecondScreen from './screens/secondScreen';
import HomeScreen1 from './screens/MainHomeScreen';
import ProfileScreen1 from './screens/profileScreen1';
import HomeAddScreen from './screens/AddSurveyScreen';
import ThirdScreen from './screens/SF36Screen';
import SF12Screen from './screens/SF12Screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {getQuestionaires} from './state/actions';

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
  // console.log('addSurvey props', props);
  // console.log(props.getQuestionaires);
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

/* <Stack.Screen name='Home' options={{ title: 'Home' }}>
  {(props) => <HomeScreen {...props} otherProp={otherProp} />}
</Stack.Screen> */

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
          // navigation={props.navigation}
        />
        {/* <Stack.Screen name="Add" options={{headerShown: false}}>
          {props => (
            <AddSurvey {...props} getQuestionaires={props.getQuestionaires} />
          )}
        </Stack.Screen> */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// moved to screen files
// const mapStateToProps = state => {
//   // console.log('appNav MapStateToProps', state);
//   return {
//     questionaires: state.questionairesReducer.questionaires,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getQuestionaires: () => {
//       dispatch(getQuestionaires());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(RootStackNavigator);
export default RootStackNavigator;
