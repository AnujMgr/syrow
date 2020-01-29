import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppProvider } from "./ContextApi/context";

import { Login, Home } from "./views";
import './App.css';

class App extends Component {
  
  	render() {
  
  		function ProductPage({ match }) {
	    	return (
	        	<Login productSlug = { match.params.slug }/>
		    ); 
		}

  		return (
	    	<BrowserRouter>
        <AppProvider>

		    	<Switch>
		        	<Route path = "/login" component = { ProductPage } exact/>
		        	<Route path = "/" component = { Home } exact/>
		        </Switch>
        </AppProvider>

	      	</BrowserRouter>
  		);
  	}
}

export default App;
