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
    console.log("set Token");
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  };

  useEffect(() => {
    setAuthTokens(authTokens);
  }, [authTokens]);

  useEffect(() => {
    const getUser = async (token) => {
      console.log("Get User");
      await fetch("https://dev-xqr59g3x.us.auth0.com/userinfo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setUser(result);
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
