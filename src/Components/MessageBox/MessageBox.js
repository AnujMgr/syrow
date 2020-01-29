import React from "react";
import { StyleMessageBoxContainer } from "./style";
import { StylePrimaryButton } from "../../Style";

const MessageBox = (props) => {
	return (
		<StyleMessageBoxContainer>
		
			<StylePrimaryButton>
				<i className="icon ti-face-smile font-24 btn-emoji"></i>
			</StylePrimaryButton>
			<input
		        type="search"
		        id="search"
		        className="hoverable"
		        placeholder="Type a Message "
		      />
		    <StylePrimaryButton>
		      	<i className="fa fa-paper-plane-o font-24"></i>
		    </StylePrimaryButton>
		</StyleMessageBoxContainer>
	);
};

export default MessageBox;
