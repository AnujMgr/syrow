import styled from "styled-components";

export const StyleSpan = styled.span`
	color: ${props => props.color ? props.color : "black"};
	font-size: ${props => props.size ? props.size : "1rem"};
	font-weight: ${props => props.weight ? props.weight : "400"};
	width: ${props => props.width ? props.width : null};
`;

export const StylePrimaryButton = styled.button`	
	border: 0;
	padding: 10px;
	margin-right: 10px;
	background: 0 0;
	outline: none;
	cursor: pointer;
	font-family: inherit;
	color: #686868
`;

export const StyleSecondaryButton = styled.button`	
	border: 0;
	padding: 0;
	margin: 0;
	background: 0 0;
	outline: none;
	cursor: pointer;
	font-family: inherit;
`;