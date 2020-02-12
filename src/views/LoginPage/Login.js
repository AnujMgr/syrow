import React, { useState, useEffect } from "react";

import { Redirect } from "react-router-dom";
import {
  StyleLoginContainer,
  StyleLoginBox,
  StyleImgContainer,
  StyleInputContainer,
  StyleLoginBtn
} from "./style";
import { StyleSpan } from "../../Style";
import { useAuth } from "../../ContextApi/auth";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [url, setUrl] = useState(null);
  const { authTokens, setAuthTokens } = useAuth();

  useEffect(() => {
    console.log("i set token");
    setAuthTokens(token);
  }, [setAuthTokens, token]);

  useEffect(() => {
    const fetchBook = async () =>
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          client_id: "asAaopfsQOxZq58X97XSgNicq7qlV7KG",
          client_secret:
            "WeXUZ8WIafrcGf3oJtCNgT7bXhenHJ9ZuMaFkJVERk-9lyso2FQj4oKO8UEwAhAA",
          audience: "https://dev-2mphq0if.auth0.com/api/v2/",
          grant_type: "http://auth0.com/oauth/grant-type/password-realm",
          username: "anujmgr777@gmail.com",
          password: "p@ssw0rd",
          scope: "openid",
          realm: "Username-Password-Authentication"
        })
      })
        .then(res => res.json())
        .then(
          result => {
            setToken(result.access_token);
          },
          error => {
            setIsError(true);
          }
        );
    console.log("i fetch");
    if (token === null) {
      fetchBook();
    }
  }, [url, token]);

  if (authTokens) {
    return <Redirect to="/" />;
  }

  return (
    <StyleLoginContainer>
      <StyleLoginBox>
        <StyleImgContainer>
          <img src="sy1.png" alt="Logo" />
          <StyleSpan size={"14px"} color={"#2b2b2b"}>
            {" "}
            WELCOME TO SYROW{" "}
          </StyleSpan>
        </StyleImgContainer>
        <StyleInputContainer>
          <StyleSpan size={"14px"} color={"#2b2b2b"} width={"100%"}>
            SIGN IN
          </StyleSpan>
          <input
            type="userName"
            value={userName}
            onChange={e => {
              setUserName(e.target.value);
            }}
            placeholder="Username"
            name="uname"
            required
          />
        </StyleInputContainer>

        <StyleInputContainer>
          <input
            type="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            name="uname"
            required
          />
        </StyleInputContainer>

        <StyleInputContainer>
          <StyleLoginBtn
            onClick={() => setUrl("https://dev-2mphq0if.auth0.com/oauth/token")}
          >
            Log In{" "}
          </StyleLoginBtn>
          {isError ? <h3>Wrong Email or Password </h3> : null}
        </StyleInputContainer>
      </StyleLoginBox>
    </StyleLoginContainer>
  );
};

export default Login;
