import { exercises } from "../constants/exercises";
import { AccordionList } from "./shared/AccordionList";
export const ExerciseList = ({ navigation, route }) => {
  return (
    <AccordionList base={exercises} navigation={navigation} type={"exercise"} />
  );
};
