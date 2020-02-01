import React, { useState } from "react";
import { 
    StyleColorOptionInput,
    StyleOptionContainer
} from "./style";

const ColorOption = (props) => {
   const [color, setColor] = useState('white');
    
    const handleColor = (color) => {
        setColor(color)
    } 
    
	return (
        <StyleOptionContainer >
            <StyleColorOptionInput 
                type = "radio" 
                id = { 1 } 
                value = { 'white' } 
                color = { 'blue' }
                onClick = {() => handleColor('white')}
            />

            <label htmlFor = { 1 }> 
                <span >
                {(color === 'white') ? 
                    <i className = "ti-check"></i> :
                    null 
                }
                </span>
            }
            </label>

            <StyleColorOptionInput 
                type = "radio" 
                id = { 2 } 
                name = "black" 
                value = { "black" } 
                color = { "black" }
                onClick = {() => handleColor('black')}
            />

            <label htmlFor = { 2 }> 
                <span >
                    {(color === 'black') ? 
                        <i className = "ti-check"></i> :
                        null 
                    }
                </span>
            </label>
            
        </StyleOptionContainer>
    )
};

export default ColorOption;
 