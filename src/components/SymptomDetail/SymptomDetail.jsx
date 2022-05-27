import { List, Typography } from '@mui/material';
import {useSelector} from 'react-redux';
import DetailItem from '../DetailItem/DetailItem.jsx'

function SymptomDetail(){
    const details = useSelector((store)=>store.detail);

    console.log(details);

    return (
        <>
        <Typography align="center" variant="h6">
            Symptom Details
        </Typography>
        <List>
            {details.map(log=>{
                return (
                <DetailItem key={log.id} log={log} />
                    )
            })}
        </List>
        </>
    )
}

export default SymptomDetail;