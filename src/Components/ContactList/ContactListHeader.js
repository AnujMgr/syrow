import React, { useState } from "react";
import {
  StyleContactHeader,
  StyleUserName,
  StyleDropDown,
  StyleButtonContainer
} from "./style";

import { useAuth } from "../../ContextApi/auth";
import { UserAvtar, SideNav } from "../../Components";
import { StylePrimaryButton } from "../../Style";

const ContactListHeader = props => {
  console.log("Contact header");
  const [isNavOpen, setNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setAuthTokens } = useAuth();

  const handleDropdown = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const toggleSideNav = () => {
    isNavOpen ? setNavOpen(false) : setNavOpen(true);
  };

  const logOut = () => {
    setAuthTokens("");
  };
  return (
    <React.Fragment>
      <StyleContactHeader>
        <UserAvtar profilePic={props.profilePic} />
        <StyleUserName size="16px" bold>
          {props.userName}
        </StyleUserName>
        <StyleButtonContainer>
          <StylePrimaryButton onClick={handleDropdown}>
            <i className="icon icon-options-vertical font-20"></i>
          </StylePrimaryButton>

          <StylePrimaryButton onClick={toggleSideNav}>
            <i className="icon icon-settings font-20"></i>
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
