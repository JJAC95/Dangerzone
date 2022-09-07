import { Button } from "react-native";

export const Homepage = ({ navigation }) => {
  return (
    <Button
      title="To Exercise List"
      onPress={() => navigation.navigate("ExercisePage")}
    />
  );
};
