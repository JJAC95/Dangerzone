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
import { WorkoutsPage } from "./components/WorkoutsPage";
import { LogExercise } from "./components/LogExercise";
import { ProfilePage } from "./components/ProfilePage";
import { Homepage } from "./components/Homepage";
import { Statspage } from "./components/StatsPage";
import { SettingsPage } from "./components/SettingsPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  console.log(useDimensions());

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{ title: "Homepage" }}
        />
        <Tab.Screen
          name="Workouts Page"
          component={WorkoutsPage}
          options={{ title: "Workouts Page" }}
        />
        <Tab.Screen
          name="LogExercise"
          component={LogExercise}
          options={{ title: "LogExercise" }}
        />
        <Tab.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ title: "ProfilePage" }}
        />
        <Tab.Screen
          name="Stats Page"
          component={Statspage}
          options={{ title: "Stats Page" }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsPage}
          options={{ title: "Settings Page" }}
        />
      </Tab.Navigator>
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
