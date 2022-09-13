import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, Platform } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkoutsPage } from "./components/WorkoutsPage";
import { LogExercise } from "./components/LogExercise";
import { ProfilePage } from "./components/ProfilePage";
import { Homepage } from "./components/Homepage";
import { Statspage } from "./components/StatsPage";
import { SettingsPage } from "./components/SettingsPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  console.log(useDimensions());

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Workouts Page") {
              iconName = "fitness-center";
            } else if (route.name === "LogExercise") {
              iconName = "post-add";
            } else if (route.name === "ProfilePage") {
              iconName = "person";
            } else if (route.name === "Stats Page") {
              iconName = "insert-chart";
            } else if (route.name === "Settings") {
              iconName = "settings";
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
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
