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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slider from '@mui/material/Slider'  
import {useState} from 'react';

function SymptomItem({symptom}){

const logSymptom = () =>{
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSubmit = () =>{
      setOpen(false);
    };
  
    return (
            <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Intensity</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please rate the intensity of this symptom on a scale of 1 (not very intense) to 5 (very intense)
            </DialogContentText>
            <Slider
            aria-label="symptom intensity"
            defaultValue={1}
            step={1}
            marks
            min={1}
            max={5}
            valueLabelDisplay="auto"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Log</Button>
          </DialogActions>
        </Dialog>
    );
}
    return(
        <Box key={symptom.id}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          </Typography>
            <List >
                <ListItem
                
                  secondaryAction={
                    <IconButton edge="end" aria-label="info">
                      <InfoIcon />
                    </IconButton>
                  }
                >
                 <Typography onClick={logSymptom}>
                     {symptom.symptom}
                 </Typography>
                </ListItem>
            </List>
        </Grid>
      </Box>
    )
}

export default SymptomItem; 