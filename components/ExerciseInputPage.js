import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import SetRepWeight from './SetRepWeight';
import { useDimensions } from '@react-native-community/hooks'
export default function ExerciseInputPage() {

    return (
        <View style={styles.container}>
          <Text>Input data for todays X workout</Text>
          <StatusBar style='auto'/>
          <Image source={{
            width:200,
            height:300,
            uri: "https://picsum.photos/200/300"
          }}/>
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