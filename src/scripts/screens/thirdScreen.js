import React, {useState} from 'react';
import QRender from './QuestionMaker';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableHighlight,
} from 'react-native';
//import {Text} from 'react-native';

// commenting out bc unsued and style.separator causing an error
// const Separator = () => <View style={styles.separator} />;

const ThirdScreenFunc = ({navigation}) => {
  const types = ['Laurel', 'John'];
  function TheRendered() {
    return QRender(types);
  }
  return (
    <View>
      <TheRendered />
      <Text> Hello</Text>
    </View>
  );
};

export default ThirdScreenFunc;
