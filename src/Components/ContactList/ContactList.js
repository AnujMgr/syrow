import React, { useState } from "react";
import {
  StyleContactContainer,
  StylePannelTriggerRight,
  StylePannelTriggerLeft,
} from "./style";
import ContactListHeader from "./ContactListHeader";
import ContactListContainer from "./ContactListContainer";

const ContactList = (props) => {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </StylePannelTriggerRight>
      </StyleContactContainer>
      <StylePannelTriggerLeft onClick={toggleContact}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </StylePannelTriggerLeft>
    </React.Fragment>
  );
};

export default React.memo(ContactList);
