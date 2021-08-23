import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "./ContextApi/auth";
import { PrivateRoute } from "./Modules";
import { Login, Home } from "./views";
import { UserContext } from "./ContextApi/UserContext";
import "./App.css";

function App() {
  const [authTokens, setAuthTokens] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );
  const [user, setUser] = useState("");
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  };

  useEffect(() => {
    setAuthTokens(authTokens);
  }, [authTokens]);

  useEffect(() => {
    const getUser = async (token) => {
      await fetch("https://api-us.cometchat.io/v2.0/users/anujmgr777/me", {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          appId: process.env.REACT_APP_Chat_App_Id,
          apiKey: process.env.REACT_APP_Chat_Api_Key,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setUser(result.data);
        });
    };
    if (authTokens) {
      getUser(authTokens);
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
