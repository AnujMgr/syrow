import React, { useState } from "react";
import { StyleContactContainer } from "./style";
import ContactListHeader from "./ContactListHeader";
import ContactListContainer from "./ContactListContainer";

const ContactList = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  const toggleContact = () => {
    isContactOpen ? setContactOpen(false) : setContactOpen(true);
  };
  console.log("i am Contact List");

  return (
    <React.Fragment>
      <StyleContactContainer isOpen={isContactOpen}>
        <ContactListHeader
          isContactOpen={isContactOpen}
          toggleContact={toggleContact}
        />
        <ContactListContainer />
      </StyleContactContainer>
    </React.Fragment>
  );
};

export default ContactList;
