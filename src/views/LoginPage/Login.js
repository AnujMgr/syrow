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
		fetch("https://reqres.in/api/login", {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({
				"email": 'eve.holt@reqres.in',
				"password" : 'cityslicka' 
			})
			
		}).then(res => {
			if (res.ok) {
				return res.json();
			} else {
				setAuthTokens(false); 
	    		setIsError(true);
			}
			}).then(json => {
				setAuthTokens(json);
	    		setLoggedIn(true);
			})
				.catch(error => setIsError(true));
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
	    			{(isError) ? <h3>Wrong Email or Password </h3> : null }
    			</StyleInputContainer>
			</StyleLoginBox>
		</StyleLoginContainer>
	);
};

export default Login;
