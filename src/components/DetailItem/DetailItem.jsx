import { IconButton, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux';
import { DateTime } from 'luxon';

function DetailItem({log}){
    const dispatch = useDispatch();

    const deleteLog = () => {
        dispatch ({
            type: 'DELETE_LOG',
            payload: {id: log.id, user_symptom_id: log.user_symptom_id}
        })
    }
    const formattedDT = DateTime.fromISO(log.inserted_at)
    return(
        <ListItem
                    secondaryAction={
                        <>
                        <IconButton aria-label="update">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={deleteLog}>
                            <DeleteIcon />
                        </IconButton>
                        </>
                    }
                    >
                    <ListItemText primary={`${formattedDT.toLocaleString(DateTime.DATETIME_MED)} intensity: ${log.intensity}`} />
                    </ListItem> 
    )
}

export default DetailItem;