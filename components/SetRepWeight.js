import React from 'react';
import { View, TextInput, StyleSheet } from "react-native";


export default function SetRepWeight(){
    return(
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <TextInput style={styles.textInput} placeholder='Sets'/>
            <TextInput style={styles.textInput} placeholder='Reps'/>
            <TextInput style={styles.textInput} placeholder='Weight'/>
        </View>
    )
}

const styles = StyleSheet.create({
textInput: {
    borderColor: 'black',
    borderWidth: 1,
    minWidth: '15%',
    textAlign: 'center',
 }
})