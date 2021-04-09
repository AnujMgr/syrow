import React, { useState } from "react";

import {
  StyleChatHeader,
  StyleChatDetails,
  StyleChatControls,
  StyleUserName,
  StyleDetails,
  StyleOverlay
} from "./style";

import { UserAvtar, DragAndDrop } from "../../Components";
import { StylePrimaryButton } from "../../Style";

const ChatHeader = props => {
  const [isFileUploadOpen, setFileUploadOpen] = useState(false);

  const toggleFileUpload = () => {
    isFileUploadOpen ? setFileUploadOpen(false) : setFileUploadOpen(true);
  };
  return (
    <StyleChatHeader>
      <UserAvtar profilePic={props.avtar} />

      <StyleChatDetails>
        <StyleUserName bold>{props.contactName}</StyleUserName>

        <StyleDetails>
          <span>Picked:</span> Advisor |<span> Viewing: </span> Advisor002,
          Advisor005
        </StyleDetails>
      </StyleChatDetails>

      <StyleChatControls>
        <StylePrimaryButton
          title="Add Files"
          onClick={() => toggleFileUpload()}
        >
          <i className="icon fa fa-paperclip font-20"></i>
        </StylePrimaryButton>
        <StylePrimaryButton title="Search">
          <input type="search" placeholder="Search" />
        </StylePrimaryButton>
      </StyleChatControls>

      {isFileUploadOpen ? (
        <React.Fragment>
          <DragAndDrop toggleFileUpload={toggleFileUpload} /> <StyleOverlay />
        </React.Fragment>
      ) : null}
    </StyleChatHeader>
  );
};

export default React.memo(ChatHeader);
