import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FormGroup from "@mui/material/FormGroup";
export const GroupPage = () => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <FormGroup row>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <List>
                <ListItem>
                  <ListItemText primary="Exercise 1" />
                  <ListItemText primary="Exercise 2" />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  );
};
