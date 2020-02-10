import styled from "styled-components";

export const StyleLoginContainer = styled.div`
  background: url(./front-login-register.jpg) no-repeat center center / cover !important;
  height: 100%;
  width: 100%;
  position: fixed;
`;

export const StyleLoginBox = styled.form`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  min-height: 500px;
  background: #fff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 25px;

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ab7692;
    height: 50px;
    font-size: 1rem;

    &::placeholder {
      color: #7d7a7a;
      font-size: 0.9rem;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyleImgContainer = styled.div`	
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	img {
		width: auto;
		height: 60px
		margin: 20px 0px;
	}
`;

export const StyleInputContainer = styled.div`
  width: 100%;
`;

export const StyleUserName = styled.input`	
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	img {
		width: 120px;
		height: 120px
		margin-bottom: 20px;
	}
`;

export const StyleLoginBtn = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background: #03a9f3;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    background: #b48fea;
  }
`;
