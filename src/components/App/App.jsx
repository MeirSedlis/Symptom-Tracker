import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Hardware/Nav/Nav";
import Footer from "../Hardware/Footer/Footer";

import ProtectedRoute from "../Hardware/ProtectedRoute/ProtectedRoute";

import AboutPage from "../Hardware/AboutPage/AboutPage";
import UserPage from "../Registration/UserPage/UserPage";
import InfoPage from "../Hardware/InfoPage/InfoPage";
import LandingPage from "../Hardware/LandingPage/LandingPage";
import LoginPage from "../Registration/LoginPage/LoginPage";
import RegisterPage from "../Registration/RegisterPage/RegisterPage";

import "./App.css";
import SymptomTracker from "../Tracker/SymptomTracker/SymptomTracker";
import TrackNewForm from "../Tracker/TrackNewForm/TrackNewForm";
import SymptomDetail from "../Detail View/SymptomDetail/SymptomDetail";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows SymptomTracker else shows LoginPage
            exact
            path="/tracker"
          >
            <SymptomTracker />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows SymptomTracker else shows LoginPage
            exact
            path="/track-new"
          >
            <TrackNewForm /> 

          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Detail Page
          exact
          path="/detail/:id"
          >
            <SymptomDetail />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
