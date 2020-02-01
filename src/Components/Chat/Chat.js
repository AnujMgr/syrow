import React , { useState } from "react";
import { 
	StyleChatContainer,
	StyleChatHeader,
	StyleChatDetails,
	StyleChatControls,
	StyleUserName,
	StyleDetails,
	StyleChatBody,
	StyleEmptyChat
} from "./style";
import { AppConsumer } from "../../ContextApi/context";

import { UserAvtar, Message, MessageBox, DragAndDrop } from "../../Components";
import { StylePrimaryButton, StyleSpan } from "../../Style";

const Home = (props) => {
	const [isOpen, setIsOpen] = useState(true);
	const toggleFileUpload = () => {
		(isOpen) ? setIsOpen(false) : setIsOpen(true)
	} 

	return (
		<StyleChatContainer>
			<AppConsumer>
				{context => {
	        		return(
	        			<React.Fragment>	
		        			{(context.chatMessages) ? 
		        				<React.Fragment>
			        				{context.chatMessages.map(message => {
										return(
					        				<React.Fragment key = {message.id}>
												<StyleChatHeader>
													<UserAvtar />
													
													<StyleChatDetails>
							        					<StyleUserName bold key = { message.id }> { message.name } </StyleUserName>
														
														<StyleDetails> 
															<span>Picked:</span> Advisor | 
															<span> Viewing: </span> Advisor002, Advisor005
														</StyleDetails>
													</StyleChatDetails>

													<StyleChatControls>
														<StylePrimaryButton >
															<i className="icon icon-volume-off font-20"></i> 
														</StylePrimaryButton>
														<StylePrimaryButton title = "Add Files" onClick = {() => toggleFileUpload()}> 
															<i className="icon fa fa-paperclip font-20"></i> 
														</StylePrimaryButton>
														<StylePrimaryButton>
															<i className="icon icon-options-vertical font-20"></i>
														</StylePrimaryButton>
													</StyleChatControls>
												</StyleChatHeader>
							        				
							        			{(isOpen) ? 
								        			<React.Fragment>	
														<StyleChatBody>
															<Message message = {message}/>
															<Message sender/>
															<Message />
															<Message />
															<Message sender/>
														</StyleChatBody>

														<MessageBox />
													</React.Fragment>
													:
													null 
												}

												{(!isOpen) ? 
								        			<React.Fragment>	
														<DragAndDrop toggleFileUpload = { toggleFileUpload } /> 
								        			</React.Fragment>	
													: null
													}
												
											</React.Fragment>
										)
						    		})}
								</React.Fragment>
								:
								<StyleEmptyChat>
									<StyleSpan size = {"2rem"} weight = {'300'} color= {'#2b2b2b'}>
										Hello Advisor005,
									</StyleSpan>
									<StyleSpan size = {"2.5rem"} weight = {'300'} color= {'#2b2b2b'}>
										Welcome to Syrow WhatsApp Chat.
									</StyleSpan>
									<StyleSpan size = {"1.5rem"} weight = {'500'} color = {'#ffa500'}>
										Please Select a chat
									</StyleSpan>
								</StyleEmptyChat>
							}
						</React.Fragment>
					)}}
			</AppConsumer>
		</StyleChatContainer>
	);
};

export default Home;
