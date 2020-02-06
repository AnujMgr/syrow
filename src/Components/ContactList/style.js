import styled from "styled-components";

export const StyleContactContainer = styled.div`
	border-right: 1px solid #dbdbdb;
	width: 30%;
	@media only screen and (max-width: 992px){
		width: ${props => props.isOpen ? '40%' : '0px'};
	    height: 100%;		
	    position: relative;
	    z-index: 2;
		top: 0;
		left: 0;
		background-color: #fff;
		overflow-x: hidden;
		transition: 0.5s;
		box-shadow: 5px 1px 40px rgba(0, 0, 0, 0.1)
	}
	@media only screen and (max-width: 768px){
	    width: ${props => props.isOpen ? '280px' : '0px'};
	    height: 100%;
	    position: relative;
	    z-index: 2;
		top: 0;
		left: 0;
		background-color: #fff;
		overflow-x: hidden;
		transition: 0.5s;
		box-shadow: 5px 1px 40px rgba(0, 0, 0, 0.1)
	}
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

export const StyleContactList = styled.ul`
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
	border-inline-end: ${props => props.active ? 'medium solid orange' : 'medium solid #fff'}
	background-color: ${props => props.active ? 'antiquewhite' : null}
`;

export const StyleChatDetails = styled.div`
	display:flex;
	flex-direction: column;
	padding: 4px 10px;
	flex-grow: 1;

`;


export const StylePannelTrigger = styled.div`	
	display: none;
	cursor: pointer;
	position: absolute;
	right: 0;
	top: 40%;
	z-index: 1;
	background-color: #353c48;
	color: #fff;
	-webkit-box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);
	box-shadow: 1px 0 3px
	rgba(0, 0, 0, 0.2);
	border-radius: 100px 0px 0px 100px;
	line-height: 1;
	padding: 15px 8px 15px 4px;
	@media only screen and (max-width: 992px){
		display: block;
	}
`;

export const StyleButtonContainer = styled.div`	
	position: relative;
`;

export const StyleDropDown = styled.div`
  	position: absolute;
  	visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  	opacity: ${props => props.isOpen ? 1 : 0};
  	padding: 1%;
	right: 0;
	min-width: 160px;
	padding: 5px 0;
    padding-bottom: 5px;
	margin: 2px 0 0;
    margin-top: 2px;
	font-size: 14px;
	text-align: left;
	list-style: none;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 6px 12px rgba(0,0,0,.175);
 
  ul {
  	list-style: none;
  	padding-left: 0px;
  	margin: 0px
  	li {
  		cursor: pointer
  		padding: 10px 0px 10px 30px;
  		:hover {
  			background-color: #f4ebeb;

  		}
  	}

  }
`;