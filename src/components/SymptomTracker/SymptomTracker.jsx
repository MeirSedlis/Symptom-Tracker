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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SymptomItem from '../SymptomItem/SymptomItem.jsx';

function SymptomTracker() {
    useEffect(() => {
        dispatch({
          type: 'FETCH_SYMPTOMS'
        })
      }, [])
      const symptoms = useSelector(store => store.symptom)
      const dispatch = useDispatch();
  return (
    <>
    {symptoms.map( (symptom) => {
        return(
            <SymptomItem symptom={symptom}/>
      )}) 
 }
    </>
  );
}
export default SymptomTracker;
