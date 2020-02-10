import React, { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import queryString from "query-string";

import { StyleChatContainer, StyleChatBody } from "./style";

import ChatHeader from "./ChatHeader";
import { Message, MessageBox } from "../../Components";
import ScrollToBottom from "react-scroll-to-bottom";
let socket;

const Chat = () => {
  console.log("i Am Chat");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    console.log("hook1");

    const { name, room } = queryString.parse("?name=Anuj&room=room");

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  useEffect(() => {
    console.log("hook2");
    socket.on("message", message => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [messages]);

  const sendMessage = useCallback((event, message) => {
    event.preventDefault();
    console.log("message");
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  }, []);
  const divStyle = {
    height: "400px",
    width: "100%"
  };
  return (
    <StyleChatContainer>
      <ChatHeader />

      <StyleChatBody>
        <ScrollToBottom className="scroll-to-bottom">
          {messages.map((msg, i) => (
            <Message key={i} message={msg} name={name} user={users} />
          ))}
        </ScrollToBottom>
      </StyleChatBody>

      <MessageBox sendMessage={sendMessage} />

      {/*
      {!isFileUploadOpen ? (
        <React.Fragment>
        </React.Fragment>
      ) : null}
      
      
      
      :
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
