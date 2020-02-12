import React from "react";
import { StyleChatContainer } from "./style";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

const Chat = () => {
  return (
    <StyleChatContainer>
      <ChatHeader />

      <ChatBody />

      {/*
      <StyleEmptyChat>
        <StyleSpan size = {"2rem"} weight = {'300'} color= {'#2b2b2b'}>
          Hello Advisor005,
        </StyleSpan>
        <StyleSpan size = {"2.5rem"} weight = {'300'} color= {'#2b2b2b'}>
          Welcome to Syrow WhatsApp Chat.
        </StyleSpan>
        <StyleSpan size = {"1.5rem"} weight = {'500'} color = {'#ffa500'}>
          Please Select a chat
        </StyleSpan>
      </StyleEmptyChat>
		}*/}
    </StyleChatContainer>
  );
};

export default Chat;
