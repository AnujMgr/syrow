import React, { useState, useEffect } from "react";

import { StyleInputContainer } from "./style";
import { StyleSpan } from "../../Style";

const InputContainer = props => {
  return (
    <React.Fragment>
      <StyleInputContainer>
        <StyleSpan size={"14px"} color={"#2b2b2b"} width={"100%"}>
          SIGN IN
        </StyleSpan>
        <input
          type="userName"
          value={props.userName}
          onChange={e => {
            props.setUserName(e.target.value);
          }}
          placeholder="Username"
          name="uname"
          required
        />
      </StyleInputContainer>

      <StyleInputContainer>
        <input
          type="Password"
          value={props.password}
          onChange={e => {
            props.setPassword(e.target.value);
          }}
          placeholder="Password"
          name="uname"
          required
        />
      </StyleInputContainer>
    </React.Fragment>
  );
};

export default InputContainer;
