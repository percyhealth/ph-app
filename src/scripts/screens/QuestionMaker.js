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

var boolList = [];
var place = 0;
function overAll(qList) {
  function EachButton(string, theList, boolList2) {
    const [response, setResponse] = useState('Not Selected');
    let length = theList.length;
    for (var i = 0; i < length; i++) {
      if (string == theList[i]) {
        break;
      } else {
        place++;
      }
    }
    function bStyle() {
      if (boolList2[place]) {
        //response = "true";
        return styles.buttonStyleOn;
      } else if (!boolList2[place]) {
        //response = "false";
        return styles.buttonStyleOff;
      }
    }
    function pressFunc() {
      if (place == 0) {
        setResponse(string);
        Alert.alert('first');
      } else if (place == 1) {
        setResponse(string);
        Alert.alert('second');
      }
    }

    return (
      <View>
        <View style={bStyle()}>
          <Text>{boolList[place].toString()}</Text>
          <Text>{place}</Text>
          <Text>{response}</Text>
          <Button title={string} color="black" onPress={() => pressFunc()} />
        </View>
        <Separator />
      </View>
    );
  }
  function QRender() {
    const types = qList;
    for (var i = 0; i < types.length; i++) {
      boolList.push(false);
    }
    boolList[0] = true;
    return <View>{types.map(type => EachButton(type, qList, boolList))}</View>;
  }
  return QRender();
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
  title_bold: {
    fontSize: 17,
    textAlign: 'left',
    opacity: 0.9,
    fontWeight: 'bold',
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
    opacity: 0.9,
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
  },
});

export default overAll;
