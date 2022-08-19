import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>This is the Profile Screen.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 100,
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
});

export default ProfileScreen;
