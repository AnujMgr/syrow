import styled from "styled-components";

export const StyleMessageBoxContainer = styled.div`	
	display: flex;
	align-items: center;
	background-color: #f9f9f9;
	position: relative;
	padding: 0 1%;
	flex-grow: 1;
		input { 
		padding: 0 0 0 20px;
		margin: 10px;
		font-size: 14px;
		font-weight: 400;
		color: #000;
		background-color: #fff;
		height: 40px;
		border: 0 !important;
		width: 100%;
		border-radius: 4px;    

		&::placeholder {
		  color: #7d7a7a;
		}
	}
`;