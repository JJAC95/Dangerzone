import { AccordionList } from "./shared/AccordionList";
import { workouts } from "../constants/workouts";
export const WorkoutsPage = ({ navigation }) => {
  return (
    <AccordionList base={workouts} navigation={navigation} type={"workout"} />
  );
};
