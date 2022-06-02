import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {Button} from '@mui/material'
import { useHistory } from "react-router";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>This app is designed to help facilitate conversations with your clinician, not replace them.</p>
      <Button variant="contained" onClick={(e)=>{history.push('/tracker')}}>Get Started</Button>
      <br/>
      <br/>
      <LogOutButton />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
