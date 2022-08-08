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
import SF36 from './SF36.json';
//import {Text} from 'react-native';
// commenting out bc unsued and style.separator causing an error

// const Separator = () => <View style={styles.separator} />;

// const ThirdScreenFunc = props => {
// console.log('src/scripts/screens/thirdScreen.js props', props);
// const {questionaires} = props;
// console.log(
//   'src/scripts/screens/thirdScreen.js props before get:',
//   questionaires,
// );
// if (!questionaires === null) {
//   props.getQuestionaires();
// }
// props.getQuestionaires is undefined
// if (!questionaires) {
//   props.getQuestionaires();
// }
// console.log(
//   'src/scripts/screens/thirdScreen.js props after get:',
//   questionaires,
// );
// const Separator = () => <View style={styles.separator} />;\\
const responsesArray = SF36.questions[0].responses;
const ThirdScreenFunc = ({navigation}) => {
  // const subTitle = (
  // <Text style={styles.head_title}>
  //   How does <Text style={styles.title_bold}>your health limit you</Text>{' '}
  //   in
  // </Text>);
  const subTitle = SF36.questions[0].instructions;
  //const mainTitle = "Moderate activities, such as moving a table, pushing a vacuum cleaner bowling, or playing golf";
  const mainTitle = SF36.questions[0].question;
  //SF36.questions[1].responses.num
  const responses = [
    responsesArray[0],
    responsesArray[1],
    responsesArray[2],
    responsesArray[3],
    responsesArray[4],
  ];
  function TheRendered() {
    return QRender(responses, mainTitle, subTitle);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TheRendered />
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
