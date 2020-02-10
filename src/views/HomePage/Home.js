import React from "react";
import { StyleWrapper } from "./style";

import { Chat, ContactList } from "../../Components";
import { AppProvider } from "../../ContextApi/context";

const Home = () => {
  return (
    <React.Fragment>
      <StyleWrapper>
        <AppProvider>
          <ContactList />
          <Chat />
        </AppProvider>
      </StyleWrapper>
    </React.Fragment>
  );
};

export default Home;
