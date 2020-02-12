import React, { useState, useContext } from "react";
import { StyleContactContainer } from "./style";
import ContactListHeader from "./ContactListHeader";
import ContactListContainer from "./ContactListContainer";
import { UserContext } from "../../ContextApi/UserContext";

const ContactList = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const { user } = useContext(UserContext);

  const toggleContact = () => {
    isContactOpen ? setContactOpen(false) : setContactOpen(true);
  };
  console.log(user);
  return (
    <React.Fragment>
      <StyleContactContainer isOpen={isContactOpen}>
        <ContactListHeader
          userName={user.nickname}
          profilePic={user.picture}
          isContactOpen={isContactOpen}
          toggleContact={toggleContact}
        />
        <ContactListContainer />
      </StyleContactContainer>
    </React.Fragment>
  );
};

export default ContactList;
