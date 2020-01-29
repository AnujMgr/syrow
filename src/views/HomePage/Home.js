import React , { useState }  from "react";
import { StyleWrapper } from "./style";

import { Chat, ContactList, SideNav } from "../../Components";

const Home = (props) => {

	const [width, setWidth] = useState('0px');
	const hideSideNav = () => {
	    setWidth('0')
	}

	const showSideNav = () => {
	    setWidth('250px')
	}
	return (
		<StyleWrapper>

			<ContactList showSideNav = { showSideNav }/>

			<Chat />

			<SideNav 
				width = {width} 
				hideSideNav = { hideSideNav }
			/> 

		</StyleWrapper>
	);
};

export default Home;
