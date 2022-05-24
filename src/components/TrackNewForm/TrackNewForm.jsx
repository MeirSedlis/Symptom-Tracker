import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function TrackNewForm() {
  useEffect(() => {
    dispatch({
      type: "FETCH_SYMPTOMS",
    });
  }, []);

  const symptoms = useSelector((store) => store.symptom);
  const dispatch = useDispatch();

  return (
      <>
        <Autocomplete
        id="symptoms"
        freeSolo
        options={symptoms.map((option) => option.symptom)}
        renderInput={(params) => <TextField {...params} label="symptoms" />}
      />
      </>
    )
}

export default TrackNewForm;
