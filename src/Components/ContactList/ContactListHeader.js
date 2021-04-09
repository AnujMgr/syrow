import React, { useState, useCallback, useContext } from "react";
import {
  StyleContactHeader,
  StyleUserName,
  StyleDropDown,
  StyleButtonContainer
} from "./style";

import { useAuth } from "../../ContextApi/auth";
import { UserAvtar, SideNav } from "../../Components";
import { StylePrimaryButton } from "../../Style";
import { UserContext } from "../../ContextApi/UserContext";

const ContactListHeader = props => {
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
        <UserAvtar profilePic={user.picture} />
        <StyleUserName size="16px" bold>
          {user.nickname}
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
