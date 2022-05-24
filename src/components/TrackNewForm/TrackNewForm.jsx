import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router';
import Box from "@mui/material/Box";

function TrackNewForm() {
  useEffect(() => {
    dispatch({
      type: "FETCH_SYMPTOMS",
    });
  }, []);

  const symptoms = useSelector((store) => store.symptom);
  const dispatch = useDispatch();
  const history = useHistory();
  const [newSymptom, setNewSymptom] = useState("");

  const handleClick = (e) => {
    e.preventDefault;
    console.log('The value of newSymptom is:', newSymptom);
  };

  return (
    <>
      <form>
        <Autocomplete
          id="symptoms"
          freeSolo
          options={symptoms.map((option) => option.symptom)}
          renderInput={(params) => <TextField {...params} label="symptoms"
          value={newSymptom}
          onChange={(event, newSymptom) =>{
              setNewSymptom(newSymptom);
          }} 
          />}
        />
        <Box textAlign="center">
        <Button size="medium" variant="contained" onClick={handleClick}>
          Track
        </Button>
        <Button
          size="medium"
          variant="outlined"
          color="error"
          onClick={() => {
            history.push("/tracker");
          }}
        >
          Cancel
        </Button>
        </Box>
      </form>
    </>
  );
}

export default TrackNewForm;
