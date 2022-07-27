import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableHighlight, } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
var response = " ";
function EachButton(string, theList, boolList){
  let length = theList.length;
  var place = 0;
  for(var i = 0; i < length; i++){
    if(string == theList[i]){
      break;
    }else{
      place++;
    }
  }
  function bStyle(){
    if(!(boolList[place])){
      return(styles.buttonStyleOff);
    }else{
      return(styles.buttonStyleOn);
    }
  }
  function pressFunc(){
    response = "string";
    Alert.alert("pressed");
  };
  
  return(
    <View>
      <View style = {bStyle()}>
        <Text>{place}</Text>
        <Button 
          title= {string} 
          color = "black"
          onPress={() => pressFunc()}
        />
      </View>
      <Separator/>
    </View>
    
  );
}

function QRender(qList){
  const types = qList;
  var boolList = [];
  //var test = "doesn't work"
  for (var i = 0; i < types.length; i++){
    boolList.push(false);
  }
  return(
    <View>
      {types.map(type=>(
        EachButton(type, qList, boolList)
      ))}
      {/* <Text>{test}</Text> */}
      <Text>{boolList}</Text>
    </View>
  )
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
    opacity: .9, 
  },
  title_bold:{
    fontSize: 17,
    textAlign: 'left',
    opacity: .9, 
    fontWeight: "bold"
  },
  title: {
    textAlign: 'left',
    marginVertical: 16,
    //fontFamily: "SF Pro Display",
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 26,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.35,
    color: '#212121',
    opacity: 0.9
  },
  buttonStyleOn: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
    //borderColor: 'black',
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
    marginVertical: 100,
  }
  
});

export default QRender;