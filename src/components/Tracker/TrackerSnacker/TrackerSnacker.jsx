
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react'

function TrackerSnacker() {
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
     
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Box textAlign="right">
       <IconButton  size="large" onClick={handleClick}>
        <HelpIcon />
      </IconButton>
      </Box>
      <Snackbar
        anchorOrigin={{vertical: "top", horizontal: "center"}}
        open={open}
        autoHideDuration={5500}
        onClose={handleClose}
        message="Tap on the name of a symptom to log it. To view details, tap the (i) button."
        action={action}
        
      />
    </div>
  );
}

export default TrackerSnacker;