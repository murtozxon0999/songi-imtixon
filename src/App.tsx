import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Welcome from "./welcome/welcome";
import Login from "./components/login/login";
import Register from "./register/register";
import Profile from "./components/profile/profile";
import Editprofile from "./components/edit-profile/edit-profile";
// import Button from "./components/button/button";
// import Login from "./components/login/login";

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Welcome} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/edit-profile" exact component={Editprofile} />
      </Switch>
    </div>
  );
}

export default App;
