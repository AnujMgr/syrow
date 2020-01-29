import styled from "styled-components";

export const StyleContactContainer = styled.div`
	width: 30%;
	border-right: 1px solid #dbdbdb;

`;

export const StyleContactHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	height: 50px;
	border-bottom: 1px solid #dbdbdb;
	align-items: center
`;

export const StyleUserName = styled.span`
	font-family: "Roboto";
	font-size: ${props => props.size };
	font-weight: ${props => props.bold ? "500" : "300"};
	flex-grow: 1;
	color: ${props => props.color ? props.color  : "black"};
`;

export const StyleContactList = styled.div`
	font-size: 18px;
	list-style: none;
	padding-left: 20px;
	padding: 10px;
`;

export const StyleSingleContact = styled.li`
	font-size: 18px;
	font-weight: 500;
	display: flex;
	cursor: pointer;
	padding: 4px 0px; 
`;

export const StyleChatDetails = styled.div`
	display:flex;
	flex-direction: column;
	padding: 4px 10px;
	flex-grow: 1;
`;
