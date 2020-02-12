import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "./ContextApi/auth";
import { PrivateRoute } from "./Modules";
import { Login, Home } from "./views";
import { UserContext } from "./ContextApi/UserContext";
import "./App.css";

function App(props) {
  const [authTokens, setAuthTokens] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );
  const [user, setUser] = useState("");

  const setTokens = data => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  };

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    console.log("noos");
    const getUser = () =>
      fetch("https://dev-2mphq0if.auth0.com/userinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens}`
        }
      })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          setUser(result);
          setAuthTokens(result);
        });
    if (authTokens !== "") {
      getUser();
    }
  }, [authTokens]);

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
