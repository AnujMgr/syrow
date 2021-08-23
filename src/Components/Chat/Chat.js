import React from "react";
import { StyleChatContainer } from "./style";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

const Chat = ({ contactUser }) => {
  return (
    <StyleChatContainer>
      <ChatHeader contactName={contactUser.name} avtar={contactUser.avatar} />

      <ChatBody
        userName={contactUser.name}
        contactUserId={contactUser.uid}
        contactUserAvatar={contactUser.avatar}
      />
    </StyleChatContainer>
  );
};

export default React.memo(Chat);
