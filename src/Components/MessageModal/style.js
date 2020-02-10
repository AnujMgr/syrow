import styled from "styled-components";

export const StyleModalContainer = styled.div`
	position: absolute;
	width: 60%;
	background: #fff;
	height: calc(100vh - 203px);
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	display: flex;
	flex-direction: column;
	z-index: 999;
	box-shadow: 5px 1px 40px rgba(0, 0, 0, 0.1);
`;

export const StyleModalHeader = styled.div`
	display: flex;
	height: 50px;
	background: #ededed;
	align-items: center;
	padding: 0px 15px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	
`;

export const StyleModalBody = styled.div`
	padding: 10px;
	flex-grow: 1;
	textarea {
		font-family: "Roboto";
		width: 100%;
		height: 100%;
		border: 1px solid #d7d7d7;
		border-radius: 7px;
	}
`;

export const StyleModalFooter = styled.div`
	display: flex;
	padding: 5px 15px;;
`;

export const StyleOverlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: #000000b3
	top: 0;
`;

export const StyleOptions = styled.div`	
	flex-grow: 1;
`;