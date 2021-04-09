import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  StyleLoginContainer,
  StyleLoginBox,
  StyleImgContainer,
  StyleInputContainer,
  StyleLoginBtn,
} from "./style";
import { StyleSpan } from "../../Style";
import { useAuth } from "../../ContextApi/auth";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setisLoading] = useState(false);
  const { authTokens, setAuthTokens } = useAuth();

  async function fetchBook(userName, event) {
    event.preventDefault();
    await fetch("https://dev-xqr59g3x.us.auth0.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.REACT_APP_Client_Id,
        client_secret: process.env.REACT_APP_Client_Secret,
        audience: "https://dev-xqr59g3x.us.auth0.com/api/v2/",
        grant_type: "http://auth0.com/oauth/grant-type/password-realm",
        username: userName,
        password: password,
        scope: "openid",
        realm: "Username-Password-Authentication",
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.access_token) {
            console.log("You are logged in");
            setAuthTokens(result.access_token);
          } else {
            setisLoading(false);
            setIsError(true);
          }
        },
        (error) => {
          setIsError(true);
        }
      );
  }

  if (authTokens) {
    return <Redirect to="/" />;
  }

  return (
    <StyleLoginContainer>
      <StyleLoginBox onSubmit={(e) => fetchBook(userName, e)}>
        <StyleImgContainer>
          <img src="sy1.png" alt="Logo" />
          <StyleSpan size={"14px"} color={"#2b2b2b"}>
            {" "}
            WELCOME TO SYROW{" "}
          </StyleSpan>
        </StyleImgContainer>
        <StyleInputContainer>
          <StyleSpan size={"14px"} color={"#2b2b2b"} width={"100%"}>
            SIGN IN <br />
            userName: anujmgr777@gmail.com <br />
            password = p@ssw0rd
          </StyleSpan>
          <br />
          <label>User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value.trim());
            }}
            // onKeyPress={(event) => {
            //   if (event.key === "Enter") {
            //     fetchBook(userName);
            //   }
            // }}
            placeholder="Username"
            name="uname"
            required
          />
        </StyleInputContainer>

        <StyleInputContainer>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value.trim());
            }}
            autoComplete="on"
            placeholder="Password"
          />
        </StyleInputContainer>

        <StyleInputContainer>
          <StyleLoginBtn disabled={loading} type="submit">
            Log In{" "}
          </StyleLoginBtn>
          {isError ? <h3>Wrong Email or Password </h3> : null}
        </StyleInputContainer>
      </StyleLoginBox>
    </StyleLoginContainer>
  );
};

export default Login;
