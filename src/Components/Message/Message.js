import React from "react";
import { StyleMessage, StyleMessageContainer, StyleDate } from "./style";
import { UserAvtar } from "../../Components";
import Moment from "react-moment";

const Message = React.memo((props) => {
  const unixTime = props.message.sentAt;
  const date = new Date(unixTime * 1000);
  const deletedAt = props.message.deletedAt;
  const deletedDate = new Date(deletedAt * 1000);

  return props.message.sender === "anujmgr777" ? (
    <StyleMessageContainer sender>
      <UserAvtar
        profilePic={props.message.data.entities.sender.entity.avatar}
      />
      <StyleMessage sender>
        {deletedAt ? (
          <>
            <p>
              <i>This message is deleted</i>
            </p>
            <StyleDate sender>
              <Moment fromNow>{deletedDate}</Moment>
            </StyleDate>
          </>
        ) : (
          <>
            <p>{props.message.data.text}</p>
            <StyleDate sender>
              <Moment fromNow>{date}</Moment>{" "}
            </StyleDate>
          </>
        )}
      </StyleMessage>
    </StyleMessageContainer>
  ) : (
    <StyleMessageContainer>
      <UserAvtar
        profilePic={props.message.data.entities.sender.entity.avatar}
      />

      <StyleMessage>
        {deletedAt ? (
          <>
            <p>This message is deleted</p>
            <StyleDate sender>
              <Moment fromNow>{deletedDate}</Moment>
            </StyleDate>
          </>
        ) : (
          <>
            <p>{props.message.data.text}</p>
            <StyleDate sender>
              <Moment fromNow>{date}</Moment>{" "}
            </StyleDate>
          </>
        )}
      </StyleMessage>
    </StyleMessageContainer>
  );
});

export default Message;
