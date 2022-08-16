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
import {connect} from 'react-redux';
import {getQuestionaires, getOneQuestionaire} from '../state/actions';
import SF36 from './SF36.json';

// const Separator = () => <View style={styles.separator} />;

const ThirdScreenFunc = props => {
  const [currentScreen, setScreen] = useState(1)
  const {questionaires, questionaire} = props;
  const [canContinue, setContinue] = useState(false);
  // get all questionaires
  if (!questionaires) {
    props.getQuestionaires();
    console.log(questionaires);
  }
  if (!questionaire) {
    // this is the current id for SF-36.
    // in the future, there should be a way to look up
    // a survey by name, not id
    props.getOneQuestionaire('62d7187c8cfe00aa3a361d10');
    console.log(questionaire);
  }
  // questionaires can now be parsed similar to responsesArray
  console.log('src/scripts/screens/thirdScreen.js', questionaire);
  // const subTitle = (
  // <Text style={styles.head_title}>
  //   How does <Text style={styles.title_bold}>your health limit you</Text>{' '}
  //   in
  // </Text>);
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
    </SafeAreaView>
  );
  function QRender(qList, mainTitle, subTitle) {
    const [currentAnswer, setCurrentAnswer] = useState("");
    function resetList(){
      paraList = [];
      for (var i = 0; i < qList.length; i++) {
        paraList.push(false);
      }
      return paraList;
    }
    const [boolList, setBoolList] = useState(resetList());
    function EachButton(string, theList) {
      tempBool = [];
      tempBool = resetList();
      var place = 0;
      let length = theList.length;
      for (var i = 0; i < length; i++) {
        if (string == theList[i]) {
          break;
        } else {
          place++;
        }
      }
      function bStyle() {
        if (boolList[place]) {
          return styles.buttonStyleOn;
        } else if (!boolList[place]) {
          return styles.buttonStyleOff;
        }
      }
      function bTxtColor() {
        if (boolList[place]) {
          return 'white';
        } else if (!boolList[place]) {
          return 'black';
        }
      }
      function pressFunc() {
        tempBool = resetList();
        tempBool[place] = !boolList[place];
        setBoolList(tempBool);
        setCurrentAnswer(qList[place]);
      }

      return (
        <View>
          <View style={bStyle()}>
            <Button
              title={string}
              color={bTxtColor()}
              onPress={() => pressFunc()}
            />
          </View>
          <Separator />
        </View>
      );
    }
    function currentResponse(){
      for(var i = 0; i< boolList.length;i++){
        if(boolList[i]){
          return(qList[i]);
        }
      }
      return("");
    }
    function optionSelected() {
      var Selected = false;
      for (var i = 0; i < boolList.length; i++) {
        if (boolList[i]) {
          Selected = true;
        }
      }
      return Selected;
    }
    function togNext() {
      var opSelected = optionSelected();
      if (opSelected) {
        var currentAnswer = currentResponse()
        Alert.alert(currentAnswer);
        setScreen(currentScreen + 1);
        //add integer/index
      }else{
        setContinue(false);
        Alert.alert('Please select a response');
      }
    }
    function continueBStyle() {
      var opSelected = optionSelected();
      if (opSelected) {
        return styles.buttonStyleOn;
      } else {
        return styles.buttonStyleOff;
      }
    }
    function continueBColor() {
      var opSelected = optionSelected();
      if (opSelected) {
        return 'white';
      } else {
        return 'black';
      }
    }
    function QMaker() {
      return (
        <View>
          <Text style={styles.head_title}>
            {subTitle}
          </Text>
          <Text style={styles.title}>{mainTitle}</Text>
          {qList.map(type => EachButton(type, qList))}
          <View style={fillerSize()} />
          <View style = {continueBStyle()}>
            <Button
              title="Continue"
              color={continueBColor()}
              onPress={() => togNext()}
            />
          </View>
          <Text>{currentAnswer}</Text>
        </View>
      );
    }
    return QMaker();

    function fillerSize(){
      var distance = 92 - ((qList.length - 3)*28)
      return(
        {
          marginVertical: distance,
        }
      )
    }
  }
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

const Separator = () => <View style={styles.separator} />;



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
  title: {
    textAlign: 'left',
    marginVertical: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 26,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.35,
    color: '#212121',
    opacity: 0.9,
  },
  buttonStyleOn: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonStyleOff: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  filler: {
    marginVertical: 92,
  },
});