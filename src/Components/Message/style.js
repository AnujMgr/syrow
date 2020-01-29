import styled from "styled-components";

export const StyleMessageContainer = styled.div`
	display: flex;
	width: 94%;
	padding: 1%;
	${ props => props.sender ? 'flex-direction: row-reverse' : null}
`;


export const StyleUserName = styled.span`
	font-size: 12px;
	font-weight: 500;
`;

export const StyleMessage = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	width: auto;
	margin: 0 20px;
	background: #f7fafc;
	${ props => props.sender ? 'background: #00c292' : 'background: #f7fafc'}
	${ props => props.sender ? 'text-align: right' : 'text-align: left'}
	padding: 15px;
	border-radius: 10px;

	${ StyleUserName } {
		${ props => props.sender ? 'color: white' : 'color: black'}
	}

	p {
		font-family: "Roboto";
		font-size: 0.8rem;
		${ props => props.sender ? 'color: white' : 'color: black'};
		margin: 0px;
		font-weight: 300;
	}
`;

export const StyleDate = styled.span`
	font-size: 0.6rem;
	font-weight: 500;
	margin-top: 10px;
	${ props => props.sender ? 'color: white' : 'color: black'};
`;
