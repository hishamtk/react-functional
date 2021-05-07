import axios from "axios";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import About from "./Components/Layouts/About";
import Alert from "./Components/Layouts/Alert";
import Contact from "./Components/Layouts/Contact";
import Navbar from "./Components/Layouts/Navbar";
import Profile from "./Components/Users/Profile";
import Users from "./Components/Users/Users";

const App = (props) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  const getAllUsers = async () => {
    try {
      setLoading(true);
      let res = await axios.get("https://api.github.com/users");
      setLoading(false);
      setUsers(res.data);
    } catch (error) {
      console.error("error on api call", error);
      setLoading(false);
    }
  };

  const getUserAndRepo = async (user) => {
    try {
      setLoading(true);

      let { data } = await axios.get(`https://api.github.com/users/${user}`);

      setUser(data);
      let res = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=10`
      );
      setRepos(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  const handleAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const searchUsers = async (text) => {
    try {
      if (text === "") {
        return handleAlert("Search should not be empty", "danger");
      }

      setLoading(false);
      let { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );

      setUsers(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Navbar title="Github App" icon="fab fa-github" />

      <div className="container">
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <Users
              getAllUsers={getAllUsers}
              users={users}
              loading={loading}
              searchUsers={searchUsers}
              alert={alert}
              handleAlert={handleAlert}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route
            exact
            path="/user/:userId"
            render={(props) => (
              <Profile
                loading={loading}
                getUserAndRepo={getUserAndRepo}
                user={user}
                repos={repos}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
