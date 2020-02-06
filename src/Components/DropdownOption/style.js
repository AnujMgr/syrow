import styled from "styled-components";

const StyleDropDown = styled.div`
  width: 370px;
  position: fixed;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isOpen ? 1 : 0};
  right: 0%;
  top: 80px;
  z-index: 999;
  transition: all 0.5s ease-out;
  padding: 1%;
  background: #fff;
`;

const StyleUl = styled.ul`
  list-style: none;
`;

export default StyleCartDropDown;
