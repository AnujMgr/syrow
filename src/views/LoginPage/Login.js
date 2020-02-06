import React, { useState } from "react";

import {  Redirect } from "react-router-dom";
import { StyleLoginContainer, StyleLoginBox, StyleImgContainer,StyleInputContainer,StyleLoginBtn } from "./style";
import { StyleSpan } from "../../Style";
import { useAuth } from "../../ContextApi/auth"; 

const Login = (props) => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const { setAuthTokens } = useAuth();
	function postLogin() {
		console.log("postLogin")
		fetch("https://login24.p.rapidapi.com/login", {
		method: 'POST',
		"headers": {
		"x-rapidapi-host": "login24.p.rapidapi.com",
		"x-rapidapi-key": "113445f711msh2c137b98966a876p1c79dbjsn93f2e66d6d74",
		"content-type": "application/x-www-form-urlencoded"
		},
			"body": {
			"password": password,
			"email": userName
		},
		}).then(result => {
	  	if (result.status === 403) {
	    	setAuthTokens(true); 
	    	setLoggedIn(true);
	  	} else {
	    	setAuthTokens(false); 
	    	setIsError(true);
	  	}
		}).catch(e => {
	  		setIsError(true);
		});
	}
	if (isLoggedIn) {
		return <Redirect to = "/" />;
	}

	return (
		<StyleLoginContainer>
			<StyleLoginBox>
				<StyleImgContainer> 
					<img src = "sy1.png" alt =  "Logo"/>
					<StyleSpan size = { '14px' } color = {'#2b2b2b'}> WELCOME TO SYROW </StyleSpan>
				</StyleImgContainer>
				<StyleInputContainer>
					<StyleSpan size = { '14px' } color = {'#2b2b2b'} width = {'100%'}>
						SIGN IN
					</StyleSpan>
	    			<input type = "userName" 
	    			value = { userName }
	    			onChange = {e => { setUserName(e.target.value)}} 
	    			placeholder = "Username" name="uname" required/>
    			</StyleInputContainer>

    			<StyleInputContainer>
	    			<input 
	    			type = "Password"
	    			value = { password } 
	    			onChange = { e => { setPassword(e.target.value)} }
	    			placeholder = "Password" 
	    			name = "uname" required/>
    			</StyleInputContainer>

    			<StyleInputContainer>
	    			<StyleLoginBtn onClick = { postLogin }>Log In </StyleLoginBtn>
	    			{(isError) ? <h3>wRONG Email </h3> : null}
    			</StyleInputContainer>
			</StyleLoginBox>
		</StyleLoginContainer>
	);
};

export default Login;
