import React from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
import styles from '../styles/styles';
import { StatusBar } from 'expo-status-bar';

export default function Homepage() {

    return (
        <View style={styles.container}>
          <Text>Welcome User</Text>
          <StatusBar style='auto'/>
          <Button color='orange' title="click"
            onPress={()=>Alert.alert('Title','message',[{text:"yes", onPress:()=> console.log('yes clicked')},{text:'No', onPress:()=> console.log('no clicked')}])}/>
        </View>
      );
}