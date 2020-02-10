import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "./ContextApi/auth";
import { PrivateRoute } from "./Modules";
import { Login, Home } from "./views";
import { UserContext } from "./ContextApi/UserContext";

import "./App.css";

function App(props) {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("token") || ""
  );

  const [user, setUser] = useState();

  const setTokens = data => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  };

  console.log(authTokens);
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <Switch>
          <UserContext.Provider>
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/" component={Home} />
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
