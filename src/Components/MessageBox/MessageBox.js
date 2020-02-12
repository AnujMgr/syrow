import React, { useState } from "react";
import { StyleMessageBoxContainer, StyleContainer } from "./style";
import { StylePrimaryButton, StyleSpan } from "../../Style";

const MessageBox = props => {
  const [isPick, setPick] = useState(false);
  const [value, setValue] = useState("");

  const toggleReplyModal = () => {
    isPick ? setPick(false) : setPick(true);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <StyleMessageBoxContainer>
      <StylePrimaryButton>
        <i className="icon ti-face-smile font-24 btn-emoji"></i>
      </StylePrimaryButton>

      {isPick ? (
        <input
          type="search"
          id="search"
          className="hoverable"
          autocomplete="off"
          placeholder="Type a Message"
          value={value}
          onChange={event => handleChange(event)}
          onKeyPress={event => {
            if (event.key === "Enter") {
              props.sendMessage(event, value);
              setValue("");
            }
          }}
        />
      ) : (
        <StyleContainer>
          <span>Advisor001, your view has been recorded. </span>
          <StyleSpan
            padding={"0px 3px"}
            cursor={" pointer"}
            color={"#1414ca"}
            onClick={() => toggleReplyModal()}
          >
            Pick
          </StyleSpan>
          <span> to make reply.</span>
        </StyleContainer>
      )}
      <StylePrimaryButton
        onClick={event => {
          props.sendMessage(event, value);
          setValue("");
        }}
      >
        <i className="fa fa-paper-plane-o font-24"></i>
      </StylePrimaryButton>
    </StyleMessageBoxContainer>
  );
};

export default MessageBox;
