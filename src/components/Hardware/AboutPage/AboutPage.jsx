import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider"

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        {/* <Typography>Symptom Tracker, The App is a simple tool designed to help facilitate better communication between patients and clinicians. Historically, interventions for patient-provider communication have generally targeted providers. By giving patients a free, accessible, and intuitive tool for tracking their issues, I aim to make patients better at advocating for themselves, and to provide clinicians with more accurate data about what’s happening in between visits</Typography>
        <hr/> */}
        <Box textAlign="center">
          <Typography variant="h6">Technologies Used</Typography>
            <Typography color="text.secondary">React</Typography>
            <Typography color="text.secondary">React Redux</Typography>
            <Typography color="text.secondary">Redux Saga</Typography>
            <Typography color="text.secondary">Material UI</Typography>
            <Typography color="text.secondary">Express</Typography>
            <Typography color="text.secondary">Node.js</Typography>
            <Typography color="text.secondary">PostgreSQL</Typography>
            <Typography color="text.secondary">Chart.js</Typography>
          <Divider sx={[{mt:2}, {mb:2}]}/>
          <Typography variant="h6">Goals</Typography>
          <Typography sx={{mb: 2}} color="text.secondary">
            Integrate APIs to track things like medications, providers, and
            facilities where users receive care.
          </Typography>
          <Divider sx={[{mt:2}, {mb:2}]}/>
          <Typography variant="h6">Thank You!</Typography>
            <Typography color="text.secondary">Our Instructor Matt</Typography>
            <Typography color="text.secondary">The Dahl Cohort</Typography>
            <Typography color="text.secondary">Prime Digital Academy</Typography>
            <Typography color="text.secondary">My Friends and Family</Typography>
            <Typography color="text.secondary">Idgie and Edmond</Typography>
         
        </Box>
      </div>
    </div>
  );
}

export default AboutPage;
