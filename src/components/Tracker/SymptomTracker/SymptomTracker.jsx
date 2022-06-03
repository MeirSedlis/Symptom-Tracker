import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SymptomItem from "../SymptomItem/SymptomItem.jsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useHistory } from 'react-router';

function SymptomTracker() {
  useEffect(() => {
    dispatch({
      type: "FETCH_USER_SYMPTOMS",
    });
  }, []);
  
  const symptoms = useSelector((store) => store.symptom);
  const dispatch = useDispatch();
  const history = useHistory();

  

  return (
    <>
      
      {symptoms.map((symptom) => {
        return <><Card sx={[{m: 6}, {bgcolor: "secondary.light"}]}><SymptomItem symptom={symptom} /></Card></>;
      })}
      {/* <Typography align="center"  color="text.disabled">
        tap a symptom to log it
      </Typography> */}
      <Box textAlign="center">
        <Button size="large" variant="contained" onClick={()=> {history.push('/track-new')}}>
          Track a New Symptom
        </Button>
      </Box>
    </>
  );
}
export default SymptomTracker;
