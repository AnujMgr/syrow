import styled from "styled-components";

export const StyleSideNav = styled.div`	
	height: 100%;
	width: ${props => props.isNavOpen ? '250px' : '0px'};
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	background-color: #fff;
	overflow-x: hidden;
	transition: 0.5s;
	box-shadow: 5px 1px 40px rgba(0, 0, 0, 0.1);
	span {
		cursor: pointer;
	}
`;

export const StyleTitle = styled.span`	
	margin: 0px;
	font-size: 13px;
	text-transform: uppercase;
`;

export const StyleSideNavHeader = styled.div`	
	display: flex;
	justify-content: space-between;
	padding: 20px;
	background-color: #00c292;
	color: #fff;
	align-items: center
`;

export const StyleSideNavBody = styled.div`	
	padding: 20px;
	ul {
		list-style: none;
		padding: 0;
	}
`;
