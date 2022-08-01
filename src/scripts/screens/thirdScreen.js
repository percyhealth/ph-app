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
  const subTitle = (
  <Text style={styles.head_title}>
    How does <Text style={styles.title_bold}>your health limit you</Text>{' '}
    in
  </Text>);
  const mainTitle = "Moderate activities, such as moving a table, pushing a vacuum cleaner bowling, or playing golf";
  const types = ['Yes, limited a lot', 'Yes, limited a little', 'No, not limited at all'];
  function TheRendered() {
    return QRender(types, mainTitle, subTitle);
  }
  return (
    <SafeAreaView style= {styles.container}>
      <View>
        <TheRendered/>
      </View>
    </SafeAreaView>
   
  );
 };
  
 export default ThirdScreenFunc;
  
  
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    marginHorizontal: 16,
    marginVertical: 50,
  },
  head_title: {
    //fontFamily: "SF Pro Display",
    fontSize: 17,
    textAlign: 'left',
    opacity: 0.9,
  },
  title_bold: {
    fontSize: 17,
    textAlign: 'left',
    opacity: 0.9,
    fontWeight: 'bold',
  },
 });
  
 