import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Message, MessageBox } from "../../Components";
import useStayScrolled from "react-stay-scrolled";
import { StyleChatBody, StyleScrollToBottom } from "./style";
import { StyleEmptyChat } from "../../views/HomePage/style";
import { StyleSpan } from "../../Style";

const ChatBody = (props) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  const divRef = useRef(null);
  const { stayScrolled } = useStayScrolled(divRef);

  useEffect(() => {
    function fetchMessage(uid) {
      const url = `https://api-us.cometchat.io/v2.0/users/anujmgr777/users/${uid}/messages`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          appId: process.env.REACT_APP_Chat_App_Id,
          apiKey: process.env.REACT_APP_Chat_Api_Key,
        },
      };

      fetch(url, options)
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

  useLayoutEffect(() => {
    stayScrolled();
  }, [messages, stayScrolled]);

  useEffect(() => {
    setMessage(messages);
  }, [messages]);

  return (
    <React.Fragment>
      <StyleChatBody>
        <StyleScrollToBottom ref={divRef}>
          {message.length !== 0 ? (
            <>
              {message.map((msg, i) => (
                <Message key={i} message={msg} />
              ))}
            </>
          ) : (
            <StyleEmptyChat>
              <StyleSpan size={"2.5rem"} weight={"300"} color={"#2b2b2b"}>
                Say Hello to {props.userName}
              </StyleSpan>
            </StyleEmptyChat>
          )}
        </StyleScrollToBottom>
      </StyleChatBody>

      <MessageBox toBeSendId={props.contactUserId} />
    </React.Fragment>
  );
};

export default ChatBody;
