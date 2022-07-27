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
//add list paramater, three individual strings, or none?

const HomeAddScreen = ({navigation}) => {
  function navigate() {
    navigation.navigate('firstScreen');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Add New Survey:</Text>
      </View>
      <View style={styles.buttonStyleOn}>
        <Button title="New Survey" color="white" onPress={() => navigate()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    marginHorizontal: 16,
    marginVertical: 100,
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

export default HomeAddScreen;
