import React, { useState, useEffect, useContext } from "react";

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
import { UserContext } from "../../ContextApi/UserContext";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [url, setUrl] = useState(null);
  const user = useContext(UserContext);
  const { setAuthTokens } = useAuth();

  useEffect(() => {
    console.log("token");
    setAuthTokens(token);
  }, [setAuthTokens, token]);

  useEffect(() => {
    const fetchBook = () =>
      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(
          result => {
            if (result.responseCode === 200) {
              setToken(result);
              setLoggedIn(true);
            } else {
              setLoggedIn(false);
            }
          },
          error => {
            if (url === null) {
              setIsError(false);
            } else {
              setIsError(true);
            }
          }
        );
    fetchBook();
  }, [url]);

  console.log("i am Login");
  if (isLoggedIn) {
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
            onClick={() =>
              setUrl(
                "http://api.jotform.com/user?apiKey=48908b197b0d6c8a621c148cc6fe5fed"
              )
            }
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
