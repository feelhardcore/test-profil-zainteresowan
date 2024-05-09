import './CoolButton.css'
import Button from '../button/Button.tsx'
import { ButtonProps } from '../../types'
import React from 'react'
/**
 * Round green button with black text
 * @property text - text to display
 * @property fn - function to execute on click
 */
function ButtonRoundGreen(props : ButtonProps)
{
    const propsModified = {...props}
    propsModified.background = "green"
    propsModified.font = {...propsModified.font, color : "white"} 
    

    return(<Button {...propsModified}  children = {props.children}/>)
}
export default ButtonRoundGreen