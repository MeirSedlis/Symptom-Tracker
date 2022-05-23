import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Symptom Tracker, The App is a simple tool designed to help facilitate better communication between patients and clinicians. Historically, interventions for patient-provider communication have generally targeted providers. By giving patients a free, accessible, and intuitive tool for tracking their issues, I aim to make patients better at advocating for themselves, and to provide clinicians with more accurate data about what’s happening in between visits</p>
      </div>
    </div>
  );
}

export default AboutPage;
