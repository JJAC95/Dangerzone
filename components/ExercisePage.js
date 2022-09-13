import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { exercises } from "../constants/exercises";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
export const ExercisePage = ({ navigation }) => {
  return (
    <div>
      {Object.keys(exercises).map((group) => (
        <Accordion disableGutters={true}>
          <AccordionSummary
            id={`${group + exercises[group]}`}
            expandIcon={
              <MaterialIcons
                name={"keyboard-arrow-down"}
                size={24}
                color={"black"}
              />
            }
          >
            <Typography>
              {group.charAt(0).toUpperCase() + group.slice(1)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={1.5}
            >
              {exercises[group].map((exercise) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>
                    {exercise.charAt(0).toUpperCase() + exercise.slice(1)}
                  </Typography>
                  <MaterialIcons
                    name={"keyboard-arrow-right"}
                    size={24}
                    color={"black"}
                  />
                </div>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
