import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router';

function SymptomItem({ symptom }) {
  const [open, setOpen] = useState(false);
  const [intensity, setIntensity] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch({
      type: "LOG_SYMPTOM",
      payload: { 
        intensity: intensity,
        id: symptom.id
      }
    });
    setOpen(false);
  };

  const handleSlider = (e) => {
    setIntensity(e.target.value);
    console.log(symptom)
  };

  const detail = symptom.id
  const getDetails = () => {
    dispatch({
      type: "FETCH_DETAILS",
      payload: detail
    });
    history.push(`/detail/${detail}`)
  };

  return (
    <Box key={symptom.id}>
      <Grid item xs={12} md={6}>
        <Typography
          sx={{ mt: 4, mb: 2 }}
          variant="h6"
          component="div"
        ></Typography>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="info" onClick={getDetails}>
                <InfoIcon />
              </IconButton>
            }
          >
            <Button onClick={handleClickOpen}>{symptom.symptom}</Button>

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Intensity</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please rate the intensity of this symptom on a scale of 1 (mild) to 5 (very intense)
                </DialogContentText>
                <Slider
                  aria-label="symptom intensity"
                  defaultValue={1}
                  step={1}
                  marks
                  min={1}
                  max={5}
                  valueLabelDisplay="auto"
                  onChange={handleSlider}
                />
                
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Log</Button>
              </DialogActions>
              
            </Dialog>
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}

export default SymptomItem;
