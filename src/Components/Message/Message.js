import React from "react";
import { 
	StyleMessage,
	StyleMessageContainer,
	StyleUserName,
	StyleDate
} from "./style";

import { UserAvtar } from "../../Components";

const Message = (props) => {
	return (
		<StyleMessageContainer sender = { props.sender }>
			<UserAvtar />
			<StyleMessage sender = { props.sender }>
				<StyleUserName>919845380809 </StyleUserName> 
				<p> What we actually want is to create separate  </p>
				<StyleDate sender = { props.sender }>6 months ago</StyleDate>
			</StyleMessage> 
		</StyleMessageContainer>
	);
};

export default Message;
