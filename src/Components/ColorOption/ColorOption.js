import React from "react";
import { 
    StyleColorOptionInput,
    StyleOptionContainer
} from "./style";

const ColorOption = (props) => {
   
	return (
        <StyleOptionContainer >
            <StyleColorOptionInput 
                type = "radio" 
                id = { "color" } 
                name = "color" 
                value = { "black" } 
                color = { "black" }
                onChange={()=>{}}
            />

            <label htmlFor={"color" }> 
                {('s' !== 'white' ) ? 
                    <span ><i className="ti-check"></i></span>
                    :
                    <span ><i className="ti-check"></i></span>
                }
            </label>

            <StyleColorOptionInput 
                type = "radio" 
                id = { "color" } 
                name = "color" 
                value = { "black" } 
                color = { "white" }
                onChange={()=>{}}
            />

            <label htmlFor={"color" }> 
                {('s' !== 'white' ) ? 
                    <span ><i className="ti-check"></i></span>
                    :
                    <span ><i className="ti-check"></i></span>
                }
            </label>
            
        </StyleOptionContainer>
    )
};

export default ColorOption;
 