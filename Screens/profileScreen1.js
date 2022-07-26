import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableHighlight, } from 'react-native';


function ProfileScreen(){

    return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
                This is the Profile Screen.
            </Text >
            {/* <Text style= {styles.textSmaller}>
                🕵
            </Text> */}
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
    textSmaller: {
        textAlign: 'left',
        marginVertical: 16,
        //fontFamily: "SF Pro Display",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 320,
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        letterSpacing:0,
        color: '#212121',
        opacity: 0.9,
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

export default ProfileScreen;