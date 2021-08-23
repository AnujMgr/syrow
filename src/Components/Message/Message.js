import React from "react";
import { StyleMessage, StyleMessageContainer, StyleDate } from "./style";
import { UserAvtar } from "../../Components";
import Moment from "react-moment";

const Message = React.memo(
  ({ senderName, messageText, senderAvatar, receiverAvatar, sentTime }) => {
    const unixTime = sentTime;
    const date = new Date(unixTime * 1000);

    return senderName === "anujmgr777" ? (
      <StyleMessageContainer sender>
        <UserAvtar profilePic={senderAvatar} />
        <StyleMessage sender>
          <>
            <p>{messageText}</p>
            <StyleDate sender>
              <Moment fromNow>{date}</Moment>{" "}
            </StyleDate>
          </>
        </StyleMessage>
      </StyleMessageContainer>
    ) : (
      <StyleMessageContainer>
        <UserAvtar profilePic={receiverAvatar} />
        <StyleMessage>
          <>
            <p>{messageText}</p>
            <StyleDate>
              <Moment fromNow>{date}</Moment>{" "}
            </StyleDate>
          </>
        </StyleMessage>
      </StyleMessageContainer>
    );
  }
);

export default Message;
