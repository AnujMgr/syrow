import React from "react";
import { AppConsumer } from "../../ContextApi/context";
import { 
	StyleContactContainer, 
	StyleContactHeader, 
	StyleUserName,
	StyleContactList,
	StyleSingleContact,
	StyleChatDetails, 
	

} from "./style";

import { UserAvtar } from "../../Components";
import { StyleSpan,StylePrimaryButton } from "../../Style";

const ContactList = (props) => {
	return (
		<StyleContactContainer>
			<StyleContactHeader>
				<UserAvtar/>
				<StyleUserName size = "16px" bold>Advisor</StyleUserName>
				<div>
					<StylePrimaryButton>
						<i className="icon icon-options-vertical font-20"></i>
					</StylePrimaryButton>
					<StylePrimaryButton  title="Attach" onClick = {() => props.showSideNav()}>
						<i className="btn icon ti-settings font-20"></i>
					</StylePrimaryButton>
				</div>
			</StyleContactHeader>

				<StyleContactList>
					<AppConsumer>
						{context => {
	        				return(
	        				<React.Fragment>
	        				 	{context.contacts.map(contact => (
									<StyleSingleContact key= {contact.id}>
										<UserAvtar />

										<StyleChatDetails onClick ={() => context.handleChatMessages(contact.id) }>
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
