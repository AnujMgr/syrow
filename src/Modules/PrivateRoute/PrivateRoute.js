import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../ContextApi/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth();
  console.log(isAuthenticated)
  return (
    <Route
      { ...rest }
      render = { props =>
        (isAuthenticated.authTokens) ? (
          <Component {...props} />
        ) 
        : 
        (
          <Redirect to = "/login" />
        )
      }
    />
  );
}

export default PrivateRoute;