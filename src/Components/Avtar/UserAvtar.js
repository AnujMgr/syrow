import React from "react";
	
import { StyleAvtarContainer, StyleAvtarImage  } from "./style";

const UserAvtar = (props) => {
	return (
		<StyleAvtarContainer>
			<StyleAvtarImage 
				src="https://whatsapp01.syrow.com/storage/user_image/avatar_default.png" 
				alt="919845380809" 
			/>
		</StyleAvtarContainer>
	);
};

export default UserAvtar;
