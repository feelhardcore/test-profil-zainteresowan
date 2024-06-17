import Button from './base/Button.tsx'
import React from 'react'
import { ButtonProps } from '../types/buttonTypes.ts'
/**
 * Round green button with black text
 * @property text - text to display
 * @property fn - function to execute on click
 */
function ButtonRoundGreen(props : ButtonProps)
{
    

    return(<Button {...props}

        background={"green"}
        font={{color : "inherit"}}
        />)
}
export default ButtonRoundGreen