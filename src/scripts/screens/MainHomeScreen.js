import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

//add list paramater, three individual strings, or none?
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Hello! This is the Home Screen</Text>
      </View>
      {/* <ToggleGroup/> */}
    </SafeAreaView>
  );
}

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
});

export default HomeScreen;
