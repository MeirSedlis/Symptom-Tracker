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
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");


  // Post new symptom to the user_symptom table !!!!! FINISH HIM!!!!!!
  const handleClick = (e) => {
    e.preventDefault();
    console.log("this is the reliable value of the autocomplete", inputValue);
  };

  return (
    <>
      <form>
        <Autocomplete
          sx={[{pt: 3}, {m:3}]}
          id="symptoms"
          freeSolo
          options={symptoms.map((option) => option.symptom)}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="symptoms" 
            />
          )}
        />
        <Box textAlign="center">
          <Button sx={{m: 1}} size="medium" variant="contained" onClick={handleClick}>
            Track
          </Button>
          <Button
            sx={{m: 1}} 
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
