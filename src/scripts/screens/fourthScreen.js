import React from 'react';
import QRender from './QuestionMaker';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import SF36 from './SF36.json'; 

const responsesArray = SF36.questions["2"].responses
const FourthScreenFunc = ({navigation}) => {
  const subTitle = SF36.questions["2"].instructions;
  const mainTitle = SF36.questions["2"].question;
  const responses = [responsesArray["1"], responsesArray["2"],responsesArray["3"],responsesArray["4"],responsesArray["5"]];
  function TheRendered() {
    return QRender(responses, mainTitle, subTitle, 'homeAddScreen',{navigation});
  }
  return (
    <SafeAreaView style= {styles.container}>
      <View>
        <TheRendered/>
      </View>
    </SafeAreaView>
   
  );
 };
  
 export default FourthScreenFunc;
  
  
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 50,
  },
  head_title: {
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
  
 