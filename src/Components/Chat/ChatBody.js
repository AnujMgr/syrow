import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Message, MessageBox } from "../../Components";
import useStayScrolled from "react-stay-scrolled";
import { StyleChatBody, StyleScrollToBottom } from "./style";
import io from "socket.io-client";

const ChatBody = (props) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  const divRef = useRef(null);
  const { stayScrolled } = useStayScrolled(divRef);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    console.log("Fetching from Message From Home");
    function fetchMessage(uid) {
      console.log("userID" + uid);

      fetch(
        `https://api-us.cometchat.io/v2.0/users/anuj1/users/${uid}/messages`,
        {
          method: "GET",
          qs: { unread: "true", undelivered: "true", count: "true" },
          headers: {
            appid: process.env.REACT_APP_Chat_App_Id,
            apikey: process.env.REACT_APP_Chat_Api_Key,
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.data) {
              setMessages(result.data);
            } else {
              console.log("Loading");
              setMessages(null);
            }
          },
          (error) => {
            console.log(error);
            setMessages(null);
          }
        );
    }
    fetchMessage(props.contactUserId);
  }, [props.contactUserId]);

  const sendMessage = (event, message, uid) => {
    event.preventDefault();
    fetch(`https://api-us.cometchat.io/v2.0/users/anuj1/messages`, {
      method: "POST",
      headers: {
        appid: process.env.REACT_APP_Chat_App_Id,
        apikey: process.env.REACT_APP_Chat_Api_Key,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: `{
        "receiver":"${uid}",
        "receiverType":"user",
        "category":"message",
        "type":"text",
        "data":{"text":"${message}",
        "metadata":{"key1":"value1",
        "key2":"value2"}}}`,
    });
  };

  useLayoutEffect(() => {
    stayScrolled();
  }, [messages, stayScrolled]);

  useEffect(() => {
    const socket = io.connect(ENDPOINT, {
      query: `uid=${props.contactUserId}`,
    });
    socket.on("FromAPI", (data) => console.log(data));
  }, [props.contactUserId, messages]);

  useEffect(() => {
    setMessage(messages);
  }, [messages]);
  console.log(message);

  return (
    <React.Fragment>
      <StyleChatBody>
        <StyleScrollToBottom ref={divRef}>
          {message ? (
            <React.Fragment>
              {message.map((msg, i) => (
                <Message key={i} message={msg} />
              ))}
            </React.Fragment>
          ) : (
            <h5>Say Hello to {props.contactUserId}</h5>
          )}
        </StyleScrollToBottom>
      </StyleChatBody>

      <MessageBox sendMessage={sendMessage} toBeSendId={props.contactUserId} />
    </React.Fragment>
  );
};

export default ChatBody;

/*{
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");

    const ENDPOINT = "localhost:5000";

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

  const sendMessage = useCallback((event, message) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  }, []);

  useLayoutEffect(() => {
    stayScrolled();
  }, [messages, stayScrolled]);
  }*/
