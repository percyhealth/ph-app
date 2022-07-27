import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableHighlight, } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);
  //add list paramater, three individual strings, or none?
  
  const ToggleGroup = ({navigation}) => {
    
    function bStyle(bool){
      if(!bool){
        return(styles.buttonStyleOff);
      }
      else{
        return(styles.buttonStyleOn);
      }
    }
    function txtColor(bool){
      if(bool){
        return('white');
      }else{
        return('black');
      }
    }
    const [response, setResponse] = useState ("Not Selected");
    const [nextButton, setNextButton] = useState(false);
    const [firstButton, setFirstButton] = useState(false); 
    const [secondButton, setSecondButton] = useState(false); 
    const [thirdButton, setThirdButton] = useState(false); 
    function navigate(){
      navigation.navigate("thirdScreen");
    }
    function togNext(bNext){
      if(bNext){
        Alert.alert("You May Pass");
        navigate()
      }else{
        Alert.alert("Please select a response");
      }
    }
    function togButton(buttonNumber){
      //Alert.alert('Button pressed');
      if(buttonNumber == 0 && firstButton){
        setFirstButton(false);
        setNextButton(false);
      }else if(buttonNumber == 1 && secondButton){
        setSecondButton(false)
        setNextButton(false);
      }else if(buttonNumber == 2 && thirdButton){
        setThirdButton(false)
        setNextButton(false);
      }else if(buttonNumber == 0){
        setFirstButton(true);
        setSecondButton(false);
        setThirdButton(false);
        setNextButton(true);
        setResponse("Yes, limited a lot");
      }else if(buttonNumber == 1){
        setFirstButton(false);
        setSecondButton(true);
        setThirdButton(false);
        setNextButton(true);
        setResponse("Yes, limited a little"); 
      }else if(buttonNumber == 2){
        setFirstButton(false);
        setSecondButton(false);
        setThirdButton(true);
        setNextButton(true);
        setResponse("No, not at all")
      }
    }
    function ResponseFunc(){
      if(firstButton || secondButton || thirdButton){
        return(<View><Text>{response}</Text></View>);
      }
    }
    return(
      <SafeAreaView style={styles.container}>
      
        <View>
          <Text style={styles.head_title}>
            How does <Text style= {styles.title_bold}>your health limit you</Text> in 
          </Text>
          <Text style={styles.title}>
          Moderate activities, such as moving a table, pushing a vacuum cleaner, bowling, or playing golf
          </Text>
        </View>
        {/* <SafeAreaView  style={styles.container}> */}
  
        <View style={bStyle(firstButton)}>
          <Button
            title= "Yes, limited a lot "
            color= {txtColor(firstButton)}
            onPress={() => togButton(0)}
          />
        </View>
        <Separator/>
        <View style={bStyle(secondButton)}>
          <Button
            title= "Yes, limited a little "
            color= {txtColor(secondButton)}
            onPress={() => togButton(1)}
          />
        </View>
        <Separator/>
        <View style={bStyle(thirdButton)}>
          <Button
            title= "No, not limited at all"
            color={txtColor(thirdButton)}
            onPress={() => togButton(2)}
          />
        </View>
        <View style = {styles.filler}/>
        <View style = {bStyle(nextButton)}>
          <Button 
            title= "Continue" 
            color= {txtColor(nextButton)}
            onPress= {() => togNext(nextButton)}
          />
        </View>
        <ResponseFunc/>
      </SafeAreaView>
    );
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
  
  // export default App;
  
  // function SignIn(){
  //     return(
  //         <Text>Sign In</Text>
  //     )
  // }
  export default ToggleGroup;