import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, Platform } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { SetRepWeight } from "./components/SetRepWeight";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExerciseList } from "./components/ExerciseList";
import { ExercisePage } from "./components/ExercisePage";
import { Homepage } from "./components/Homepage";

const Stack = createNativeStackNavigator();
export default function App() {
  console.log(useDimensions());

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{ title: "Homepage" }}
        />
        <Stack.Screen
          name="ExerciseList"
          component={ExerciseList}
          options={{ title: "Exercise List" }}
        />
        <Stack.Screen
          name="ExercisePage"
          component={ExercisePage}
          options={{ title: "Exercise Page" }}
        />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
        <SetRepWeight />
        <Button
          color="orange"
          title="click"
          onPress={() =>
            Alert.alert("Title", "message", [
              { text: "yes", onPress: () => console.log("yes clicked") },
              { text: "No", onPress: () => console.log("no clicked") },
            ])
          }
        />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
