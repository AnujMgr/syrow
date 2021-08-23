import React, { useEffect, useState } from "react";
import UserAvtar from "../Avtar";
import { StyleChatDetails, StyleSingleContact, StyleUserName } from "./style";

export default function SingleContact({
  contact,
  index,
  getContactUser,
  isActive,
  handleActiveChat,
}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function fetchMessage(uid) {
      const url = `https://api-us.cometchat.io/v2.0/users/anujmgr777/messages?perPage=100&withTags=false`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          appId: process.env.REACT_APP_Chat_App_Id,
          apiKey: process.env.REACT_APP_Chat_Api_Key,
        },
        receiverType: "user",
      };

      fetch(url, options)
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.data) {
              console.log(result);
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

    // fetchMessage(contact.uid);
  }, []);

  if (messages.pop() !== undefined) {
    console.log(messages);
  }

  return (
    <StyleSingleContact
      active={index === isActive ? true : false}
      key={contact.uid}
      onClick={() => getContactUser(contact)}
    >
      <UserAvtar profilePic={contact.avatar} />

      <StyleChatDetails onClick={() => handleActiveChat(index)}>
        <div className="d-flex-sb">
          <StyleUserName size={"0.9rem"} color="black">
            {contact.name}
          </StyleUserName>
          {/* <StyleSpan size={"0.8rem"} color={"#7d7d7d"} weight={"300"}>
            6:24 PM
          </StyleSpan> */}
        </div>
        {/* <div className="d-flex-sb">
          <StyleMessage size={"0.9rem"} color={"black"}>
            Oh understood
          </StyleMessage>
          <StyleNewMsgIndicator>3</StyleNewMsgIndicator>
        </div> */}

        <div className="d-flex-sb">
          {/* <StyleSpan size={"0.6rem"} color={"#7d7d7d"}>
            Syrow(9841000000)
          </StyleSpan>
          <StyleSpan size={"0.6rem"} color={"black"}>
            Advisor001
          </StyleSpan> */}
        </div>
      </StyleChatDetails>
    </StyleSingleContact>
  );
}
