import { MenuItem, IconButton, InputLabel, ListItem, ListItemText, Select, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux';
import { DateTime } from 'luxon';
import {useState} from 'react';

function DetailItem({log}){
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [newIntensity, setNewIntensity] = useState('');

    const deleteLog = () => {
        dispatch ({
            type: 'DELETE_LOG',
            payload: {id: log.id, user_symptom_id: log.user_symptom_id}
        })
    }


    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    const handleChange = (e) =>{
        setNewIntensity(e.target.value);
    }

    const formattedDT = DateTime.fromISO(log.inserted_at)
    
    return(
        <ListItem
                    secondaryAction={
                        <>
                        <IconButton aria-label="update" onClick={handleClickOpen}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={deleteLog}>
                            <DeleteIcon />
                        </IconButton>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Update Intensity</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Please choose a new rating for the intensity of this log.
                                </DialogContentText>
                             <Select
                             value={newIntensity}
                             onChange={handleChange}
                             autoWidth
                             label="new-intensity"
                             >
                                 <MenuItem value="1">1</MenuItem>
                                 <MenuItem value="2">2</MenuItem>
                                 <MenuItem value="3">3</MenuItem>
                                 <MenuItem value="4">4</MenuItem>
                                 <MenuItem value="5">5</MenuItem>
                                 </Select> 
                            </DialogContent>
                        </Dialog>
                        </>
                    }
                    >
                    <ListItemText primary={`${formattedDT.toLocaleString(DateTime.DATETIME_MED)} intensity: ${log.intensity}`} />
                    </ListItem> 
    )
}

export default DetailItem;