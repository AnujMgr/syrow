import React from "react";
import {
  StyleMessage,
  StyleMessageContainer,
  StyleUserName,
  StyleDate
} from "./style";
import { UserAvtar } from "../../Components";

const Message = React.memo(message => {
  let isSentByCurrentUser = false;

  const trimmedName = message.name.trim().toLowerCase();

  if (message.message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <StyleMessageContainer sender>
      <UserAvtar profilePic={"https://picsum.photos/200/200"} />
      <StyleMessage sender>
        <StyleUserName>{message.message.user}</StyleUserName>
        <p>{message.message.text}</p>
        <StyleDate sender>6 months ago</StyleDate>
      </StyleMessage>
    </StyleMessageContainer>
  ) : (
    <StyleMessageContainer>
      <UserAvtar profilePic={"https://picsum.photos/200/200"} />

      <StyleMessage>
        <StyleUserName>{message.message.user}</StyleUserName>
        <p>{message.message.text}</p>
        <StyleDate>6 months ago</StyleDate>
      </StyleMessage>
    </StyleMessageContainer>
  );
});

export default Message;
