import React, { useState } from "react";
import { StyleContactList } from "./style";
import SingleContact from "./SingleContact";

const ContactListContainer = (props) => {
  const [isActive, setActive] = useState(false);

  const handleActiveChat = (id) => {
    setActive(id);
  };
  if (props.contacts === null) {
    return <h4>Loading...</h4>;
  } else {
    return (
      <StyleContactList>
        {props.contacts.data.map((contact, index) => (
          <SingleContact
            key={contact.uid}
            isActive={isActive}
            index={index}
            contact={contact}
            getContactUser={props.getContactUser}
            handleActiveChat={handleActiveChat}
          />
        ))}
      </StyleContactList>
    );
  }
};

export default React.memo(ContactListContainer);
