import React, { Component } from "react";

import data from "../data";

const AppContext = React.createContext();
//If you only want to avoid passing some props
//through many levels. Context is designed to share
//data that can be considered “global” for a tree of
//React components, such as the current authenticated user, theme, or preferred language.”
class AppProvider extends Component {
  state = {
    contacts: []
  };

  componentDidMount = () => {
    this.setState({ contacts: data.contacts });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          handleChatMessages: this.handleChatMessages
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
