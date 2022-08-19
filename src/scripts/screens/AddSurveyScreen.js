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
  function navigate36() {
    navigation.navigate('thirdScreen');
  }
  function navigate12() {
    navigation.navigate('SF12Screen');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Add New Survey:</Text>
      </View>
      <View style={styles.buttonStyleOn}>
        <Button
          title="SF-36 Survey"
          color="white"
          onPress={() => navigate36()}
        />
      </View>
      <Separator />
      <View style={styles.buttonStyleOn}>
        <Button
          title="SF-12 Survey"
          color="white"
          onPress={() => navigate12()}
        />
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
  separator: {
    marginVertical: 8,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeAddScreen;
