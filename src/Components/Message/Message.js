import React from "react";
import {
  StyleMessage,
  StyleMessageContainer,
  StyleUserName,
  StyleDate
} from "./style";
import { UserAvtar } from "../../Components";

const Message = React.memo(message => {
  console.log("I am Message");
  let isSentByCurrentUser = false;

  const trimmedName = message.name.trim().toLowerCase();

  if (message.message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <StyleMessageContainer sender>
      <UserAvtar />
      <StyleMessage sender>
        <StyleUserName>{message.message.user}</StyleUserName>
        <p>{message.message.text}</p>
        <StyleDate sender>6 months ago</StyleDate>
      </StyleMessage>
    </StyleMessageContainer>
  ) : (
    <StyleMessageContainer>
      <UserAvtar />
      <StyleMessage>
        <StyleUserName>{message.message.user}</StyleUserName>
        <p>{message.message.text}</p>
        <StyleDate>6 months ago</StyleDate>
      </StyleMessage>
    </StyleMessageContainer>
  );
});

export default Message;
