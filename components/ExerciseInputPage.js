import React from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SetRepWeight from './SetRepWeight';
import styles from '../styles/styles';

//component for exercise input page, ie if you did an arms workout you'd have bicep curl, tri pull downs etc, and input the weight reps and sets for each one, will take props of exercise name, image, if cardio could have distance / speed / time etc instead
//and have functions to handle the save of each exercise to add to the correct databse/list for future referencing
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


