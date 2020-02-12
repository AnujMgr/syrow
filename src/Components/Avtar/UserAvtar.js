import React from "react";

import { StyleAvtarContainer, StyleAvtarImage } from "./style";

const UserAvtar = props => {
  console.log("avtar");
  return (
    <StyleAvtarContainer>
      <StyleAvtarImage src={props.profilePic} alt="919845380809" />
    </StyleAvtarContainer>
  );
};

export default UserAvtar;
