/**
 * Base button for application
 * @property text - text to display on button, required
 * @property fn - function to execute on click, required
 * @property color - button color, defaults to gray
 * @property txtColor text color, defaults to black
 * @property isToggle - button toggleable, defaults to false
 */

import { ReactNode, SyntheticEvent, useState } from "react"
import './Button.css'
import React from "react"
import { ButtonProps } from "../../types.tsx"
import { generateButtonClasses, generateButtonInlineStyle } from "../../propParser.ts"

export default function Button(props : ButtonProps & {children : ReactNode | string}){

    const [toggle, setToggle] = useState(false)
    const disabled = props.disabled

    const isToggleable = props.toggleable
    const shouldHandleDisabled = props.shouldHandleDisabled

    const onClickFunc = props.events.onClick


    const onClick = (e : SyntheticEvent) => {


        if (disabled && !shouldHandleDisabled) return
        else if(disabled && shouldHandleDisabled){
            if(onClickFunc) onClickFunc(e); return
        }
        //handle base button events

        if(isToggleable){
            setToggle(!toggle)
            e.currentTarget.classList.toggle("toggle")
            e.currentTarget.classList.toggle("notoggle")

        }


        // execute passed funtion to the button


        if(onClickFunc) onClickFunc(e);

    }

    return(<button disabled = {disabled} style = {generateButtonInlineStyle(props)} className={generateButtonClasses(props)} onClick={(e) => onClick(e)}>
        {props.children}
    </button>)

}