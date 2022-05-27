import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import {useSelector} from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux'

function SymptomDetail(){
    const details = useSelector((store)=>store.detail);
    const dispatch = useDispatch();

    const deleteLog = () => {
        dispatch ({
            type: 'DELETE_LOG',
            payload: log.id
        })
    }

    console.log(details);

    return (
        <>
        <h1>I am the details you were looking for</h1>
        <List>
            {details.map(log=>{
                return (
                <ListItem
                    // key={value}
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
                    </ListItem> )
            })}
        </List>
        </>
    )
}

export default SymptomDetail;