import React from "react";

import { StyleLoginContainer, StyleLoginBox, StyleImgContainer,StyleInputContainer,StyleLoginBtn } from "./style";
import { StyleSpan } from "../../Style";

const Login = (props) => {
	return (
		<StyleLoginContainer>
			<StyleLoginBox>
				<StyleImgContainer>
					<img src="sy1.png" alt= "Logo"/>
					<StyleSpan size={ '14px' } color= {'#2b2b2b'}> WELCOME TO SYROW </StyleSpan>
				</StyleImgContainer>
				<StyleInputContainer>
					<StyleSpan size = { '14px' } color= {'#2b2b2b'} width = {'100%'}>
						SIGN IN
					</StyleSpan>
	    			<input type="text" placeholder="Username" name="uname" required/>
    			</StyleInputContainer>

    			<StyleInputContainer>
	    			<input type="Password" placeholder="Password" name="uname" required/>
    			</StyleInputContainer>

    			<StyleInputContainer>
	    			<StyleLoginBtn>Log In </StyleLoginBtn>
    			</StyleInputContainer>
			</StyleLoginBox>
		</StyleLoginContainer>
	);
};

export default Login;
