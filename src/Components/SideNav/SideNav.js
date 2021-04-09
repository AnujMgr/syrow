import React from "react";
import {
  StyleSideNav,
  StyleSideNavHeader,
  StyleTitle,
  StyleSideNavBody
} from "./style";

const SideNav = props => {
  return (
    <StyleSideNav isNavOpen={props.isNavOpen}>
      <StyleSideNavHeader>
        <StyleTitle> Theme Modify </StyleTitle>
        <span onClick={props.toggleSideNav}>
          <i className="ti-close right-side-toggle"></i>
        </span>
      </StyleSideNavHeader>

      <StyleSideNavBody>
        <ul>
          <li>
            <b>Layout Options</b>
          </li>
        </ul>

        <ul id="mainthemecolors" className="m-t-20">
          <li>
            <b>Theme (Light/Dark)</b>
          </li>
          <li></li>
        </ul>
      </StyleSideNavBody>
    </StyleSideNav>
  );
};

export default React.memo(SideNav);
