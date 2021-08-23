import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useContext,
} from "react";
import { Message, MessageBox } from "../../Components";
import useStayScrolled from "react-stay-scrolled";
import { StyleChatBody, StyleScrollToBottom } from "./style";
import { StyleEmptyChat } from "../../views/HomePage/style";
import { StyleSpan } from "../../Style";
import { UserContext } from "../../ContextApi/UserContext";

const ChatBody = (props) => {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(UserContext);
  const divRef = useRef(null);
  const { stayScrolled } = useStayScrolled(divRef);

  useEffect(() => {
    function fetchMessage(currentUserId, uid) {
      const url = `https://api-us.cometchat.io/v2.0/users/${currentUserId}/users/${uid}/messages`;
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
              var message = [];
              result.data.map((msg) =>
                // console.log(msg)
                message.push({
                  message: msg.data.text,
                  sender: msg.sender,
                  receiver: msg.receiver,
                  sentAt: msg.sentAt,
                })
              );

              setMessages(message);
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
    fetchMessage(user.uid, props.contactUserId);
  }, [user.uid, props.contactUserId]);

  useLayoutEffect(() => {
    stayScrolled();
  }, [messages, stayScrolled]);

  const handleSentMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <React.Fragment>
      <StyleChatBody>
        <StyleScrollToBottom ref={divRef}>
          {messages.length !== 0 ? (
            <>
              {messages.map((msg, i) => (
                <Message
                  key={msg.sentAt}
                  senderName={msg.sender}
                  receiverName={msg.receiver}
                  messageText={msg.message}
                  senderAvatar={user.avatar}
                  receiverAvatar={props.contactUserAvatar}
                  sentTime={msg.sentAt}
                />
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

      <MessageBox
        currentUserId={user.uid}
        toBeSendId={props.contactUserId}
        sentMessage={handleSentMessage}
      />
    </React.Fragment>
  );
};

export default ChatBody;
