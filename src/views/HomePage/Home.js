import React, { useState, useEffect, useContext } from "react";
import { StyleWrapper, StyleEmptyChat } from "./style";
import { StyleSpan } from "../../Style";

import { Chat, ContactList } from "../../Components";
import { UserContext } from "../../ContextApi/UserContext";

const Home = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState(null);
  const [contactUser, setContactUser] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function fetchContactList() {
      await fetch(`https://api-us.cometchat.io/v2.0/users/anujmgr777/friends`, {
        method: "GET",
        headers: {
          appId: process.env.REACT_APP_Chat_App_Id,
          apiKey: process.env.REACT_APP_Chat_Api_Key,
          "content-type": "application/json",
          accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setContact(result);
            setLoading(false);
          },
          (error) => {
            console.log(error);
            setError(error);
          }
        );
    }

    fetchContactList();
  }, []);
  const getContactUser = (contUser) => {
    setContactUser(contUser);
  };

  return (
    <React.Fragment>
      {!error ? (
        <StyleWrapper>
          {!loading ? (
            <ContactList getContactUser={getContactUser} contacts={contact} />
          ) : (
            <h6>Loading...</h6>
          )}
          {contactUser ? (
            <Chat contactUser={contactUser} />
          ) : (
            <StyleEmptyChat>
              <StyleSpan size={"2rem"} weight={"300"} color={"#2b2b2b"}>
                {user.nickname}
              </StyleSpan>
              <StyleSpan size={"2.5rem"} weight={"300"} color={"#2b2b2b"}>
                Welcome to Syrow Chat
              </StyleSpan>
              <StyleSpan size={"1.5rem"} weight={"500"} color={"#ffa500"}>
                Please Select a chat
              </StyleSpan>
            </StyleEmptyChat>
          )}
        </StyleWrapper>
      ) : (
        <h6>{error}</h6>
      )}
    </React.Fragment>
  );
};

export default Home;
