import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
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
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("this is the reliable value of the autocomplete", inputValue);
    // console.log('The values of newSymptom is:', newSymptom);
  };

  return (
    <>
      <form>
        <Autocomplete
          id="symptoms"
          freeSolo
          options={symptoms.map((option) => option.symptom)}
          value={value}
          onChange={(event, newValue) => {
            console.log("hello");
            setValue(newValue);
            console.log("in onchange", newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            console.log("in oninputchange", newInputValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="symptoms" 
            />
          )}
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
