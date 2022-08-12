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
import {connect} from 'react-redux';
import {getQuestionaires, getOneQuestionaire} from '../state/actions';
import SF36 from './SF36.json';

// const Separator = () => <View style={styles.separator} />;

const ThirdScreenFunc = props => {
  const [currentScreen, setScreen] = useState(1)
  const {questionaires, questionaire} = props;
  // get all questionaires
  if (!questionaires) {
    props.getQuestionaires();
  }
  if (!questionaire) {
    // this is the current id for SF-36.
    // in the future, there should be a way to look up
    // a survey by name, not id
    props.getOneQuestionaire('62d7187c8cfe00aa3a361d10');
  }
  // questionaires can now be parsed similar to responsesArray
  console.log('src/scripts/screens/thirdScreen.js', questionaire);
  // const subTitle = (
  // <Text style={styles.head_title}>
  //   How does <Text style={styles.title_bold}>your health limit you</Text>{' '}
  //   in
  // </Text>);
  function continueFunc(){
    setScreen(currentScreen + 1);
  }
  const responsesArray = questionaire.questions[0][currentScreen].responses;
  const instructions = questionaire.questions[0][currentScreen].instructions;
  const mainTitle = questionaire.questions[0][currentScreen].question;
  console.log("///////////////////////////////"+ currentScreen + "///////////////////////////////")
  console.log(typeof instructions) //string?
  console.log(typeof mainTitle)
  console.log(typeof responsesArray)
  var  optionsNum = 0;
  for(var i = 1; i <= 6;i++){
    if(questionaire.questions[0][currentScreen].responses["" + i] == undefined){
      break;
    }
    optionsNum++;
  }
  
  
  var responses = [];
  for(var i = 1; i<= optionsNum; i++){
    var place = "" + i;
    responses.push(responsesArray[place]);
  }
  console.log(responses);

  //SF36.questions[1].responses.num
  function TheRendered() {
    return QRender(responses, mainTitle, instructions);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TheRendered />
      </View>
      <View>
        <Button
        title = "CONTINUE"
        onPress = {() => continueFunc()}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    questionaires: state.questionairesReducer.questionaires,
    questionaire: state.questionairesReducer.questionaire,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestionaires: () => {
      dispatch(getQuestionaires());
    },
    getOneQuestionaire: id => {
      dispatch(getOneQuestionaire(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThirdScreenFunc);

// see ./index.js, export/import did not agree with file separation
// export default ThirdScreenFunc;

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
