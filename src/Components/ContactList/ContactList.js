import React , { useState } from "react";
import { AppConsumer } from "../../ContextApi/context";
import { 
	StyleContactContainer, 
	StyleContactHeader, 
	StyleUserName,
	StyleContactList,
	StyleSingleContact,
	StyleChatDetails,
	StylePannelTrigger 
} from "./style";

import { UserAvtar } from "../../Components";
import { StyleSpan, StylePrimaryButton } from "../../Style";

const ContactList = (props) => {
	
	const [isActive, setActive] = useState(true);
	const handleActiveChat = (id) => {
		setActive(id)
	}

	return (
		<StyleContactContainer isOpen = { props.isOpen }>
			<StylePannelTrigger onClick = {() => props.toggleContact() } >
				<i className="ti-angle-left"></i>
			</StylePannelTrigger>

			<StyleContactHeader>
				<UserAvtar/>
				<StyleUserName size = "16px" bold>Advisor</StyleUserName>
				<div>
					<StylePrimaryButton>
						<i className="icon icon-options-vertical font-20"></i>
					</StylePrimaryButton>
				<StylePrimaryButton 
					title="Settings" 
					onClick = {() => {props.toggleSideNav();props.toggleContact()}}>
						<i className="btn icon ti-settings font-20"></i>
					</StylePrimaryButton>
				</div>
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
													color="#7d7d7d"> {contact.name} 
												</StyleUserName>
												<StyleSpan 
													size = {'0.8rem' } 
													color = { '#7d7d7d'} 
													weight={'300'}>6:24 PM
												</StyleSpan>
											</div>
											<StyleSpan 
												size = { '0.9rem' } 
												color = {'black'}>Oh understood 
											</StyleSpan>
											<StyleSpan 
												size = { '0.6rem' } 
												color = {'#7d7d7d'}>Syrow(9841000000)
											</StyleSpan>
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
