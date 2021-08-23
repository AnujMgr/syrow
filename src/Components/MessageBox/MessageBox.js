import React, { useState } from "react";
import { StyleMessageBoxContainer } from "./style";
import { StylePrimaryButton } from "../../Style";
import moment from "moment";

const MessageBox = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const sendMessage = (event, message, uid, currentUserId) => {
    event.preventDefault();
    const url = `https://api-us.cometchat.io/v2.0/users/${currentUserId}/messages`;
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        appId: process.env.REACT_APP_Chat_App_Id,
        apiKey: process.env.REACT_APP_Chat_Api_Key,
      },
      body: JSON.stringify({
        category: "message",
        receiver: uid,
        receiverType: "user",
        type: "text",
        data: { text: message, metadata: { key1: "value1", key2: "value2" } },
      }),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  };

  return (
    <StyleMessageBoxContainer>
      <StylePrimaryButton>
        <i className="icon ti-face-smile font-24 btn-emoji"></i>
      </StylePrimaryButton>

      <input
        type="search"
        id="search"
        className="hoverable"
        autoComplete="off"
        placeholder="Type a Message"
        value={value}
        onChange={(event) => handleChange(event)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            sendMessage(event, value, props.toBeSendId, props.currentUserId);
            setValue("");
            props.sentMessage({
              message: value,
              sender: props.currentUserId,
              receiver: props.toBeSendId,
              sentAt: moment().unix(),
            });
          }
        }}
      />

      <StylePrimaryButton
        onClick={(event) => {
          sendMessage(event, value, props.toBeSendId, props.currentUserId);
          setValue("");
          props.sentMessage({
            message: value,
            sender: props.currentUserId,
            receiver: props.toBeSendId,
            sentAt: moment().unix(),
          });
        }}
      >
        <i className="fa fa-paper-plane-o font-24"></i>
      </StylePrimaryButton>
    </StyleMessageBoxContainer>
  );
};

export default React.memo(MessageBox);
