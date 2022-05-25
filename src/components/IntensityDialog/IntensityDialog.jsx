import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slider from '@mui/material/Slider'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

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
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      {symptom.symptom}
      </Button>
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
    </div>
  );
}
