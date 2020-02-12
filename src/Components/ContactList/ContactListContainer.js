import React, { useState } from "react";
import { AppConsumer } from "../../ContextApi/context";
import {
  StyleUserName,
  StyleContactList,
  StyleSingleContact,
  StyleChatDetails,
  StyleMessage,
  StyleNewMsgIndicator
} from "./style";
import { UserAvtar } from "../../Components";
import { StyleSpan } from "../../Style";

const ContactListContainer = () => {
  const [isActive, setActive] = useState(false);

  console.log("i am ContactListContainer");

  const handleActiveChat = id => {
    setActive(id);
  };
  return (
    <StyleContactList>
      <AppConsumer>
        {context => {
          return (
            <React.Fragment>
              {context.contacts.map((contact, index) => (
                <StyleSingleContact
                  active={index === isActive ? true : false}
                  key={contact.id}
                >
                  <UserAvtar profilePic={"https://picsum.photos/200/200"} />

                  <StyleChatDetails onClick={() => handleActiveChat(index)}>
                    <div className="d-flex-sb">
                      <StyleUserName size={"0.9rem"} color="black">
                        {" "}
                        {contact.name}
                      </StyleUserName>
                      <StyleSpan
                        size={"0.8rem"}
                        color={"#7d7d7d"}
                        weight={"300"}
                      >
                        6:24 PM
                      </StyleSpan>
                    </div>
                    <div className="d-flex-sb">
                      <StyleMessage size={"0.9rem"} color={"black"}>
                        Oh understood
                      </StyleMessage>
                      <StyleNewMsgIndicator>3</StyleNewMsgIndicator>
                    </div>

                    <div className="d-flex-sb">
                      <StyleSpan size={"0.6rem"} color={"#7d7d7d"}>
                        Syrow(9841000000)
                      </StyleSpan>
                      <StyleSpan size={"0.6rem"} color={"black"}>
                        Advisor001
                      </StyleSpan>
                    </div>
                  </StyleChatDetails>
                </StyleSingleContact>
              ))}
            </React.Fragment>
          );
        }}
      </AppConsumer>
    </StyleContactList>
  );
};

export default ContactListContainer;
