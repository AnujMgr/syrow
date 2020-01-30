import React , { useState }  from "react";
import { StyleWrapper,StylePannelTrigger } from "./style";

import { Chat, ContactList, SideNav } from "../../Components";

const Home = (props) => {

	const [isNavOpen, setNavOpen] = useState(true);
	const [isOpen, setIsOpen] = useState(true);

	const toggleSideNav = () => {
		(isNavOpen) ? setNavOpen(false) : setNavOpen(true);
	}

	const toggleContact = () => {
		(isOpen) ? setIsOpen(false) : setIsOpen(true)
	}
	
	return (
		<StyleWrapper>
			<ContactList
				isOpen = { isOpen }
				toggleSideNav = { toggleSideNav } 
				toggleContact = { toggleContact } 
				/>

			<StylePannelTrigger onClick = {() => toggleContact() }>
				<i className="ti-angle-right"></i>
			</StylePannelTrigger>
			<Chat />
			<SideNav 
				isNavOpen = { isNavOpen } 
				toggleSideNav = { toggleSideNav }
			/> 

		</StyleWrapper>
	);
};

export default Home;
