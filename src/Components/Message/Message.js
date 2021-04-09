import React from "react";
import {
  StyleMessage,
  StyleMessageContainer,
  StyleUserName,
  StyleDate
} from "./style";
import { UserAvtar } from "../../Components";

const Message = React.memo(props => {
  return props.message.sender === "anuj1" ? (
    <StyleMessageContainer sender>
      <UserAvtar
        profilePic={props.message.data.entities.sender.entity.avatar}
      />
      <StyleMessage sender>
        <StyleUserName>{props.message.sender}</StyleUserName>
        <p>{props.message.data.text}</p>
        <StyleDate sender>6 months ago</StyleDate>
      </StyleMessage>
    </StyleMessageContainer>
  ) : (
    <StyleMessageContainer>
      <UserAvtar
        profilePic={props.message.data.entities.sender.entity.avatar}
      />

      <StyleMessage>
        <StyleUserName>{props.message.receiver}</StyleUserName>
        <p>{props.message.text}</p>
        <StyleDate>6 months ago</StyleDate>
      </StyleMessage>
    </StyleMessageContainer>
  );
});

export default Message;
