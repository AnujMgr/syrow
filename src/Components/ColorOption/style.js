import styled from "styled-components";

export const StyleColorOptionInput = styled.input`
	display: none;

    + label {
      color: #fff;
      font-family: Arial, sans-serif;
      font-size: 14px;
		span {
			display: inline-block;
			width: 40px;
			height: 40px;
			margin: -1px 4px 0 0;
			vertical-align: middle;
			cursor: pointer;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
			background-repeat: no-repeat;
			background-position: center;
			text-align: center;
			line-height: 44px;
      		background: ${props => props.color};

			i {
				line-height: 1.7;
				opacity: 0;
	          	transition: all .3s ease;
			}
		}
	}
	&:checked + label span i {
      opacity: 1;
    }
`;

export const StyleOptionContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
  	align-items: center;
  	margin-top: 10px;
`;
