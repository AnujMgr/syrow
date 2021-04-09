import React, { useState } from "react";
import {
  StyleContactContainer,
  StylePannelTriggerRight,
  StylePannelTriggerLeft
} from "./style";
import ContactListHeader from "./ContactListHeader";
import ContactListContainer from "./ContactListContainer";

const ContactList = props => {
  console.log("i am Contact List");
  const [isContactOpen, setContactOpen] = useState(false);

  const toggleContact = () => {
    isContactOpen ? setContactOpen(false) : setContactOpen(true);
  };

  return (
    <React.Fragment>
      <StyleContactContainer isOpen={isContactOpen}>
        <ContactListHeader />

        <ContactListContainer
          contacts={props.contacts}
          getContactUser={props.getContactUser}
        />
        <StylePannelTriggerRight onClick={() => toggleContact()}>
          <i className="ti-angle-left"></i>
        </StylePannelTriggerRight>
      </StyleContactContainer>
      <StylePannelTriggerLeft onClick={toggleContact}>
        <i className="ti-angle-right"></i>
      </StylePannelTriggerLeft>
    </React.Fragment>
  );
};

export default React.memo(ContactList);
