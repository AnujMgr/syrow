import React , { useState }  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppProvider } from "./ContextApi/context";
import { AuthContext } from "./ContextApi/auth";
import { PrivateRoute } from "./Modules";

import { Login, Home } from "./views";
import './App.css';

function App(props) {
  
  	const [authTokens, setAuthTokens] = useState();
  	useState(localStorage.getItem('authTokens') || '');
	const setTokens = (data) => {
		localStorage.setItem("tokens", JSON.stringify(data));
		setAuthTokens(data);
	}
  	console.log(authTokens)
	return (
		<AuthContext.Provider value = {{  authTokens, setAuthTokens: setTokens  }}>
    		<BrowserRouter>
	        	<AppProvider>
			    	<Switch>
			        	<Route path = "/login" component = { Login } exact/>
			        	<PrivateRoute path = "/" component = { Home } />
			        </Switch>
	        	</AppProvider>
      		</BrowserRouter>
    	 </AuthContext.Provider>

		);
	}

export default App;
