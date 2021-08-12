import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform, TextInput} from 'react-native';
import { useDimensions } from '@react-native-community/hooks'
import SetRepWeight from './components/SetRepWeight';
export default function App() {
  
  console.log(useDimensions())
  const handlePress = () => {
    console.log('clicked')
  }
  return (
    <View style={styles.container}>
       
      <Text>Hello World!</Text>
      <StatusBar style='auto'/>
      <SetRepWeight/>
      <Button color='orange' title="click"
        onPress={()=>Alert.alert('Title','message',[{text:"yes", onPress:()=> console.log('yes clicked')},{text:'No', onPress:()=> console.log('no clicked')}])}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
