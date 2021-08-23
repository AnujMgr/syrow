import React, { useState, useCallback, useContext } from "react";
import {
  StyleContactHeader,
  StyleUserName,
  StyleDropDown,
  StyleButtonContainer,
} from "./style";

import { useAuth } from "../../ContextApi/auth";
import { UserAvtar, SideNav } from "../../Components";
import { StylePrimaryButton } from "../../Style";
import { UserContext } from "../../ContextApi/UserContext";

const ContactListHeader = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setAuthTokens } = useAuth();
  const { user } = useContext(UserContext);

  const handleDropdown = useCallback(() => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }, [isOpen, setIsOpen]);

  const toggleSideNav = useCallback(() => {
    isNavOpen ? setNavOpen(false) : setNavOpen(true);
  }, [isNavOpen, setNavOpen]);

  const logOut = () => {
    setAuthTokens("");
  };
  return (
    <React.Fragment>
      <StyleContactHeader>
        <UserAvtar profilePic={user.avatar} />
        <StyleUserName size="16px" bold>
          {user.name}
        </StyleUserName>
        <StyleButtonContainer>
          <StylePrimaryButton onClick={handleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </StylePrimaryButton>

          <StylePrimaryButton onClick={toggleSideNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </StylePrimaryButton>

          <StyleDropDown isOpen={isOpen}>
            <ul>
              <li onClick={logOut}>
                <i className="fa fa-power-off"></i> Logout{" "}
              </li>
            </ul>
          </StyleDropDown>
        </StyleButtonContainer>
      </StyleContactHeader>

      <SideNav isNavOpen={isNavOpen} toggleSideNav={toggleSideNav} />
    </React.Fragment>
  );
};

export default React.memo(ContactListHeader);
