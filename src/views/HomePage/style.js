import styled from "styled-components";

export const StyleWrapper = styled.div`	
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	width: 94%;
	height: calc(100vh - 60px);
	min-height: 200px;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 5px 0
    rgba(0, 0, 0, .2);
    @media only screen and (max-width: 992px){
    	width: 100%;
		height: 100vh;

    }
`;

export const StylePannelTrigger = styled.div`	
	display: none;
	cursor: pointer;
	position: absolute;
	left: 0;
	top: 40%;
	z-index: 1;
	background-color: #353c48;
	color: #fff;
	-webkit-box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);
	box-shadow: 1px 0 3px
	rgba(0, 0, 0, 0.2);
	border-radius:  0px 100px 100px 0px ;
	line-height: 1;
	padding: 15px 8px 15px 4px;
	@media only screen and (max-width: 992px){
		display: block;
	}
`;