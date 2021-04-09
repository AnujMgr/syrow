import React, { useState } from "react";
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

const ContactListContainer = props => {
  const [isActive, setActive] = useState(false);

  const handleActiveChat = id => {
    setActive(id);
  };

  if (props.contacts === null) {
    return <h4>Loading...</h4>;
  } else {
    return (
      <StyleContactList>
        {props.contacts.data.map((contact, index) => (
          <StyleSingleContact
            active={index === isActive ? true : false}
            key={contact.uid}
            onClick={() => props.getContactUser(contact)}
          >
            <UserAvtar profilePic={contact.avatar} />

            <StyleChatDetails onClick={() => handleActiveChat(index)}>
              <div className="d-flex-sb">
                <StyleUserName size={"0.9rem"} color="black">
                  {contact.name}
                </StyleUserName>
                <StyleSpan size={"0.8rem"} color={"#7d7d7d"} weight={"300"}>
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
      </StyleContactList>
    );
  }
};

export default React.memo(ContactListContainer);
