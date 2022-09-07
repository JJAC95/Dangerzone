import { Button } from "react-native";

export const ExercisePage = ({ navigation }) => {
  return (
    <Button
      title="Page 2"
      onPress={() => navigation.navigate("ExerciseList")}
    />
  );
};
