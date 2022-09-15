import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "@mui/material";
export const AccordionList = ({ base, type, navigation }) => {
  return (
    <div>
      {Object.keys(base).map((group) => (
        <Accordion disableGutters={true} key={group}>
          <AccordionSummary
            id={`${group + base[group]}`}
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
              {base[group].map((subItem) => (
                <div
                  key={`${group + subItem}`}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  onClick={() =>
                    type == "workout"
                      ? navigation.navigate("GroupPage", {
                          title: subItem,
                        })
                      : navigation.navigate("ExercisePage", {
                          title: subItem,
                        })
                  }
                >
                  <Typography>
                    {subItem.charAt(0).toUpperCase() + subItem.slice(1)}
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
