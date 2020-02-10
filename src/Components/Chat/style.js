import styled from "styled-components";

export const StyleChatContainer = styled.div`
  width: 69.9%;
  border-left: 1px solid #dbdbdb;
  margin: 0 -1px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 992px) {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    bottom: 0;
  }
`;

export const StyleModalContainer = styled.div`
  position: absolute;
`;

export const StyleOverlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: #000000b3
	top: 0;
	left: 0;
`;

export const StyleChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;

export const StyleChatBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  min-height: 50px;
  align-items: center;
  height: calc(100vh - 203px);
  overflow-x: hidden;
  overflow-y: auto;
  @media only screen and (max-width: 992px) {
    height: calc(100vh - 150px);
  }
`;

export const StyleChatDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 10px;
  flex-grow: 1;
  overflow: hidden;
`;

export const StyleChatControls = styled.div`
  display: flex;
  justify-content: space-between;

  input[type="search"] {
    width: 15px;
    padding-left: 10px;
    color: transparent;
    cursor: pointer;
    background: #fff url(//static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png)
      no-repeat 9px center;
    border: none;
    padding: 9px 10px 9px 32px;
    width: 0px;
    border-radius: 10em;
    transition: all 0.5s;
  }
  input[type="search"]:hover {
    background-color: #ededed;
  }
  input[type="search"]:focus {
    width: 130px;
    padding-left: 32px;
    border-color: #66cc75;
    border: solid 1px #ccc;
    color: #000;
    background-color: #fff;
    cursor: auto;
    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  }
  input:placeholder {
    color: transparent;
  }
`;

export const StyleUserName = styled.span`
  color: #2b2b2b;
  font-size: ${props => props.size};
  font-weight: ${props => (props.bold ? "500" : "300")};
  flex-grow: 1;
`;

export const StyleDetails = styled.span`
  font-size: 12px;
  color: #686868;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  span {
    color: black;
  }
`;

export const StyleEmptyChat = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  font-family: roboto;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
