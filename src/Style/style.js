import styled from "styled-components";

export const StyleSpan = styled.span`
	color: ${props => props.color ? props.color : "black"};
	font-size: ${props => props.size ? props.size : "1rem"};
	font-weight: ${props => props.weight ? props.weight : "400"};
	width: ${props => props.width ? props.width : null};
	padding: ${props => props.padding ? props.padding : null}
	cursor: ${props => props.cursor ? props.cursor :null}
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
	padding: ${props => props.padding ? props.padding : "10px"};
	margin: ${props => props.margin ? props.margin : "10px"};
	background: ${props => props.bgColor ? props.bgColor : "#fff0"};
	outline: none;
	cursor: pointer;
	font-family: inherit;
	color: ${props => props.color ? props.color : '#fff' };
	box-shadow: 5px 1px 40px rgba(0, 0, 0, 0.1);
	
`;