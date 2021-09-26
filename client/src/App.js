import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import LogMood from "./pages/logMood";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/logmood" component={LogMood} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;