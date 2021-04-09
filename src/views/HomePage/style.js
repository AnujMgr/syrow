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
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 100vh;
  }
`;

export const StyleEmptyChat = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  font-family: roboto;
  width: 70%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid #f9e1e1;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;
