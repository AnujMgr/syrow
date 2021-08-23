import React from "react";
import { StyleChatContainer } from "./style";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

const Chat = (props) => {
  return (
    <StyleChatContainer>
      <ChatHeader
        contactName={props.contactUser.name}
        avtar={props.contactUser.avatar}
      />

      <ChatBody
        userName={props.contactUser.name}
        contactUserId={props.contactUser.uid}
      />
    </StyleChatContainer>
  );
};

export default React.memo(Chat);
