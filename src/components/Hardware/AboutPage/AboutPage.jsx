import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

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
          <List>
            <ListItem>React</ListItem>
            <ListItem>React Redux</ListItem>
            <ListItem>Redux Saga</ListItem>
            <ListItem>Material UI</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>PostgreSQL</ListItem>
            <ListItem>Chart.js</ListItem>
          </List>
          <hr />
          <Typography variant="h6">Goals</Typography>
          <List>
            <ListItem>Integrate APIs to track things like medications, providers, and facilities where users receive care.</ListItem>
          </List>
          <hr />
          <Typography variant="h6">Thank You!</Typography>
          <List>
            <ListItem>Our Instructor Matt</ListItem>
            <ListItem>The Dahl Cohort</ListItem>
            <ListItem>Prime Digital Academy</ListItem>
            <ListItem>My Friends and Family</ListItem>
            <ListItem>Idgie and Edmond</ListItem>
          </List>
        </Box>
      </div>
    </div>
  );
}

export default AboutPage;
