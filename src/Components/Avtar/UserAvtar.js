import React from "react";

import { StyleAvtarContainer, StyleAvtarImage } from "./style";

const UserAvtar = (props) => {
  return (
    <StyleAvtarContainer>
      <StyleAvtarImage src={props.profilePic} alt="img" />
    </StyleAvtarContainer>
  );
};

export default React.memo(UserAvtar);
