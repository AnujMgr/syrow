import React from "react";
import {
  StyleModalContainer,
  StyleModalHeader,
  StyleModalBody,
  StyleModalFooter,
  StyleOverlay,
  StyleOptions
} from "./style";
import {
  StylePrimaryButton,
  StyleSpan,
  StyleSecondaryButton
} from "../../Style";

const MessageModal = React.memo(function MessageModal(props) {
  const handleChange = event => {
    props.setMessage(event.target.value);
  };
  return (
    <React.Fragment>
      <StyleModalContainer>
        <StyleModalHeader>
          <StyleSpan size={"1rem"}>Reply: +34 6328 09 08 </StyleSpan>
          <StyleSpan weight={"500"}>
            <i className="ti-arrow-right" />
          </StyleSpan>
          <StyleSpan size={"1rem"}>Syrow(918032492348)</StyleSpan>
        </StyleModalHeader>
        <StyleModalBody>
          <textarea
            name="textarea"
            value={props.message}
            onChange={event => handleChange(event)}
            placeholder="  Compose Your Message"
          />
        </StyleModalBody>
        <StyleModalFooter>
          <StyleOptions>
            <StylePrimaryButton
              title="Add Files"
              onClick={() => props.toggleFileUpload()}
            >
              <i className="icon fa fa-paperclip font-20"></i>
            </StylePrimaryButton>
          </StyleOptions>
          <div>
            <StyleSecondaryButton
              title="Add Files"
              bgColor="#5757c6"
              padding=" 5px 10px"
              onClick={event => props.sendMessage(event)}
            >
              Send & Release
            </StyleSecondaryButton>
            <StyleSecondaryButton
              title="Add Files"
              onClick={() => props.toggleReplyModal()}
              bgColor="#b5b2b2"
              margin="0px"
              padding="5px 10px"
            >
              cancel
            </StyleSecondaryButton>
          </div>
        </StyleModalFooter>
      </StyleModalContainer>
      <StyleOverlay />
    </React.Fragment>
  );
});

export default MessageModal;
