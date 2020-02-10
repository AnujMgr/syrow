import React, { useState, useCallback } from "react";
import {
  StyleContactHeader,
  StyleUserName,
  StyleDropDown,
  StyleButtonContainer,
  StylePannelTriggerRight,
  StylePannelTriggerLeft
} from "./style";

import { useAuth } from "../../ContextApi/auth";
import { UserAvtar, SideNav } from "../../Components";
import { StylePrimaryButton } from "../../Style";

const ContactListHeader = props => {
  console.log("i am Contact List Header");
  const [isNavOpen, setNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setAuthTokens } = useAuth();

  const handleDropdown = useCallback(() => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }, [isOpen]);

  const toggleSideNav = useCallback(() => {
    isNavOpen ? setNavOpen(false) : setNavOpen(true);
  }, [isNavOpen]);

  const logOut = () => {
    setAuthTokens();
  };
  return (
    <React.Fragment>
      {props.isContactOpen ? (
        <StylePannelTriggerRight onClick={() => props.toggleContact()}>
          <i className="ti-angle-left"></i>
        </StylePannelTriggerRight>
      ) : null}
      <StyleContactHeader>
        <UserAvtar />
        <StyleUserName size="16px" bold>
          Advisor
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
      {!props.isContactOpen ? (
        <StylePannelTriggerLeft onClick={props.toggleContact}>
          <i className="ti-angle-right"></i>
        </StylePannelTriggerLeft>
      ) : null}

      <SideNav isNavOpen={isNavOpen} />
    </React.Fragment>
  );
};

export default ContactListHeader;
