import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import {useSelector} from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux'

function DetailItem({log}){
    const dispatch = useDispatch();

    const deleteLog = () => {
        dispatch ({
            type: 'DELETE_LOG',
            payload: {id: log.id, user_symptom_id: log.user_symptom_id}
        })
    }

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
                    <ListItemText primary={`${log.inserted_at} intensity:${log.intensity}`} />
                    </ListItem> 
    )
}

export default DetailItem;