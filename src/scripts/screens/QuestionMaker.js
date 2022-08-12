/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
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
const Separator = () => <View style={styles.separator} />;

function overAll(qList, mainTitle, subTitle) {
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
      //integer/index
    }else{
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
  function QRender() {
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
  return QRender();

  function fillerSize(){
    var distance = 92 - ((qList.length - 3)*28)
    return(
      {
        marginVertical: distance,
      }
    )
  }
}
  
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

export default overAll;
