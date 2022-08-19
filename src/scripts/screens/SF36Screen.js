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
 
// const Separator = () => <View style={styles.separator} />;
 
const ThirdScreenFunc = props => {
 const [currentScreen, setScreen] = useState(1)
 const {questionaires, questionaire} = props;
 // get all questionaires
 if (!questionaires) {
   props.getQuestionaires();
   console.log(questionaires);
 }
 if (!questionaire) {
   // this is the current id for SF-36.
   // in the future, there should be a way to look up
   // a survey by name, not id
   //SF-12: 62fa69824ad471fcbad8577f
   //SF-36: 62d7187c8cfe00aa3a361d10
   props.getOneQuestionaire('62d7187c8cfe00aa3a361d10');
   console.log(questionaire);
 }
 // questionaires can now be parsed similar to responsesArray
 console.log('src/scripts/screens/SF36.js', questionaire);
 // const subTitle = (
 // <Text style={styles.head_title}>
 //   How does <Text style={styles.title_bold}>your health limit you</Text>{' '}
 //   in
 // </Text>);
 const responsesArray = questionaire.questions[0][currentScreen].responses;
 const instructions = questionaire.questions[0][currentScreen].instructions;
 const mainTitle = questionaire.questions[0][currentScreen].question;
 
 var  optionsNum = 0;
 //Count how many  possible answers there are:
 for(var i = 1; i <= 7;i++){
   if(questionaire.questions[0][currentScreen].responses["" + i] == undefined){
     break;
   }
   optionsNum++;
 }
 //add all possible answers to an array:
 var responses = [];
 for(var i = 1; i<= optionsNum; i++){
   var place = "" + i;
   responses.push(responsesArray[place]);
 }
 
 //The Rendered Runs the QRener function that compiles the page:
 function TheRendered() {
   return QRender(responses, mainTitle, instructions);
 }
 return (
   <SafeAreaView style={styles.container}>
     <View>
       {/* Return/Display TheRendered */}
       <TheRendered />
     </View>
   </SafeAreaView>
 );
 //Define QRender function:
 function QRender(qList, mainTitle, subTitle) {
   //qList: The list of possible answers
   //mainTitle: The main question being displayed
   //subTitle: The instructions for the main title
   //react hook that saves current selected answer, first defined as an empty string:
   const [currentAnswer, setCurrentAnswer] = useState("");
   //resetList is a function that returns a list of False boolean, each of which correspond to a possible answer in qList
   function resetList(){
     paraList = [];
     for (var i = 0; i < qList.length; i++) {
       paraList.push(false);
     }
     return paraList;
   }
   //boolList is a list of booleans the length of qList, first set to all False
   const [boolList, setBoolList] = useState(resetList());
   //EachButton is the rendering of each individual button that is being mapped in the QMaker function
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
     //The functions bellow edit the display of each button, using the boolList to see if the button is actived or not
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
     //Return/display each button
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
   //Returns the current selected response, if none is selected, an empty string is returned
   function currentResponse(){
     for(var i = 0; i< boolList.length;i++){
       if(boolList[i]){
         return(qList[i]);
       }
     }
     return("");
   }
   //Returns the current selected response index, if none is selected, an empty string is returned
   function currentResponseInt(){
     for(var i = 0; i< boolList.length;i++){
       if(boolList[i]){
         return(""+i);
       }
     }
     return("");
   }
   //optionSelected is a function to check if any response is selected
   function optionSelected() {
     var Selected = false;
     for (var i = 0; i < boolList.length; i++) {
       if (boolList[i]) {
         Selected = true;
       }
     }
     return Selected;
   }
   //togNext is called when the continueButton  is selected
   function togNext() {
     var opSelected = optionSelected();
     //if there is an option selected then the user can continue, if not, the user is alerted to select a response
     if (opSelected) {
       var currentAnswer = currentResponse()
       var currentIndex = currentResponseInt()
       Alert.alert(currentAnswer  + " //  Index of response: " +  currentIndex);
       //Advance current screen  by one integer
       setScreen(currentScreen + 1);
     }else{
       Alert.alert('Please select a response');
     }
   }
   //continueBStyle and continueBColor change the appereance of the continue button, in accordance to it's state
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
     //returning the display of each button
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
   marginHorizontal: 16,
   marginVertical: 50,
 },
 head_title: {
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