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

  const tokenValue = useMemo(() => ({ authTokens, setAuthTokens }), [
    authTokens,
    setAuthTokens
  ]);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  console.log(authTokens);

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
          console.log("i am user");
          setUser(result);
        });
    if (authTokens !== "") {
      getUser();
    }
  }, [authTokens]);

  return (
    <AuthContext.Provider value={tokenValue}>
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
