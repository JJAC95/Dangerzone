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
import { ExercisePage } from "./components/ExercisePage";
import { ExerciseList } from "./components/ExerciseList";
import { GroupPage } from "./components/GroupPage";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function WorkoutRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workouts Page" component={WorkoutsPage} />
      <Stack.Screen
        name={"Exercise List"}
        component={ExerciseList}
        // options={{ title: route.params?.title }}
      />
      <Stack.Screen
        name={"ExercisePage"}
        component={ExercisePage}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name={"GroupPage"}
        component={GroupPage}
        options={({ route }) => ({ title: `${route.params.title} Exercises` })}
      />
    </Stack.Navigator>
  );
}
function LogExerciseRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log Exercise" component={LogExercise} />
      <Stack.Screen
        name={"Exercise List"}
        component={ExerciseList}
        // options={{ title: route.params?.title }}
      />
      <Stack.Screen
        name={"ExercisePage"}
        component={ExercisePage}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  console.log(useDimensions());

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Workouts Page") {
              console.log(route);
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
          component={WorkoutRoot}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="LogExercise"
          component={LogExerciseRoot}
          options={{ headerShown: false }}
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
