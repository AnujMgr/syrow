import React , { useState } from "react";
import { AppConsumer } from "../../ContextApi/context";
import { 
	StyleContactContainer, 
	StyleContactHeader, 
	StyleUserName,
	StyleContactList,
	StyleSingleContact,
	StyleChatDetails,
	StyleDropDown,
	StyleMessage,
	StyleNewMsgIndicator,
	StyleButtonContainer,
	StylePannelTrigger 
} from "./style";

import { UserAvtar } from "../../Components";
import { StyleSpan, StylePrimaryButton } from "../../Style";
import { useAuth } from "../../ContextApi/auth"; 

const ContactList = (props) => {
	
	const [isActive, setActive] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	const handleActiveChat = (id) => {
		setActive(id)
	}

	const handleDropdown = () => {
		(isOpen) ? setIsOpen(false) : setIsOpen(true)
	}

	const { setAuthTokens } = useAuth();

	function logOut() {
		setAuthTokens();
	}


	return (
		<StyleContactContainer isOpen = { props.isOpen }>
			<StylePannelTrigger onClick = {() => props.toggleContact() } >
				<i className="ti-angle-left"></i>
			</StylePannelTrigger>

			<StyleContactHeader>
				<UserAvtar/>
				<StyleUserName size = "16px" bold>Advisor</StyleUserName>
				<StyleButtonContainer>
					<StylePrimaryButton onClick = {() => handleDropdown() }>
						<i className="icon icon-options-vertical font-20"></i>
					</StylePrimaryButton>

					<StyleDropDown isOpen = { isOpen }> 
						<ul>
							<li onClick = {() => logOut() }>
							<i className="fa fa-power-off"></i> Logout </li>
						</ul>
					</StyleDropDown>
				</StyleButtonContainer>
			</StyleContactHeader>

				<StyleContactList>
					<AppConsumer>
						{context => {
	        				return(
	        				<React.Fragment>
	        				 	{context.contacts.map((contact,index) => (
									<StyleSingleContact 
										active = {(index === isActive ) ? true : false } 
										key = {contact.id}>
										<UserAvtar />

										<StyleChatDetails onClick = {() => {context.handleChatMessages(contact.id);handleActiveChat( index ) }}>
											<div className="d-flex-sb">
												<StyleUserName 
													size = { '0.9rem' }
													color="black"> {contact.name} 
												</StyleUserName>
												<StyleSpan 
													size = {'0.8rem' } 
													color = { '#7d7d7d'} 
													weight={'300'}>6:24 PM
												</StyleSpan>
											</div>
											<div className = "d-flex-sb">
												<StyleMessage 
													size = { '0.9rem' } 
													color = {'black'}>
													Oh understood 
												</StyleMessage>
												<StyleNewMsgIndicator>
													3
												</StyleNewMsgIndicator>
											</div>
											
											<div className="d-flex-sb">
												<StyleSpan 
													size = { '0.6rem' } 
													color = {'#7d7d7d'}>Syrow(9841000000)
												</StyleSpan>
												<StyleSpan
													size = { '0.6rem' }
													color = { 'black' }>Advisor001</StyleSpan>
											</div>
											
										</StyleChatDetails>

									</StyleSingleContact>
								))}
								</React.Fragment>
							)
						}}
					</AppConsumer>
				</StyleContactList>

		</StyleContactContainer>
	);
};

export default ContactList;
