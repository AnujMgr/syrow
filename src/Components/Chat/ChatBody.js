import React, { useState, useEffect, useCallback, useContext } from "react";
import { UserContext } from "../../ContextApi/UserContext";
import { Message, MessageBox } from "../../Components";
import ScrollToBottom from "react-scroll-to-bottom";
import { StyleChatBody } from "./style";
import io from "socket.io-client";

let socket;

const ChatBody = () => {
  const { user } = useContext(UserContext);
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState(user.nickname);

  const ENDPOINT = "https://project-chat-application.herokuapp.com/";
  useEffect(() => {
    const { name, room } = { name: `${user.nickname}`, room: "room" };

    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, user]);

  useEffect(() => {
    if (user !== "") {
      socket.on("message", message => {
        setMessages([...messages, message]);
      });
    }

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [messages, user]);

  const sendMessage = useCallback(
    (event, message) => {
      event.preventDefault();
      if (message) {
        socket.emit("sendMessage", message, () => setMessage(""));
      }
    },
    [message]
  );

  return (
    <React.Fragment>
      <StyleChatBody>
        <ScrollToBottom className="scroll-to-bottom">
          {messages.map((msg, i) => (
            <Message key={i} message={msg} name={name} user={users} />
          ))}
        </ScrollToBottom>
      </StyleChatBody>

      <MessageBox sendMessage={sendMessage} />
    </React.Fragment>
  );
};

export default ChatBody;
