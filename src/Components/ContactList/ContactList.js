import React, { useState, useContext, useEffect } from "react";
import {
  StyleContactContainer,
  StylePannelTriggerRight,
  StylePannelTriggerLeft
} from "./style";
import ContactListHeader from "./ContactListHeader";
import ContactListContainer from "./ContactListContainer";
import { UserContext } from "../../ContextApi/UserContext";

const ContactList = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const { user } = useContext(UserContext);
  const [contact, setContact] = useState(null);

  const toggleContact = () => {
    isContactOpen ? setContactOpen(false) : setContactOpen(true);
  };

  useEffect(() => {
    async function fetchData() {
      await fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(
          res => {
            console.log(res);
            setContact(res);
          },
          error => {
            console.log(error);
          }
        );
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <StyleContactContainer isOpen={isContactOpen}>
        <ContactListHeader userName={user.nickname} profilePic={user.picture} />

        <ContactListContainer contact={contact} />
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

export default ContactList;
