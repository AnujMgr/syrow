import styled from "styled-components";

export const StyleWrapper = styled.div`
  height: 60%;
  width: 80%;
  margin: auto;
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

export const StyleHeader = styled.div`
  display: flex;
  width: auto;
  height: auto;
  padding: 0px 20px;
  background: #eee;
  align-items: center;
  span {
    cursor: pointer;
    font-size: 1.2rem;
  }
  p {
    flex-grow: 1;
    font-size: 1.2rem;
    padding-left: 20px;
  }
`;

export const StyleContainer = styled.div`
  padding: 10px 20px;
  height: calc(80vh - 100px);
  overflow-x: hidden;
  overflow-y: auto;
`;

export const StyleThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const StyleThumb = styled.div`
  display: inline-flex;
  border-radius: 2;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px,
  box-sizing: border-box
`;

export const StyleThumbImg = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const StyleThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
  position: relative;
  justify-content: center

  :hover ${StyleThumbImg}{
    filter: blur(8px);
  }
  :hover span{
    display: block
  }
  span {
    display: none;
    position: absolute;
    bottom: 0px;
    font-size: 20px;
    color: black;
  }
`;

export const StyleFooter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  bottom: 0;
  height: 50px;
  background: #eee;
`;

export const StyleDropArea = styled.div`
  border: 1px dashed #d8d8d8;
  padding: 50px;
`;
