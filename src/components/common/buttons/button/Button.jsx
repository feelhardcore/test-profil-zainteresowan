/**
 * Base button for application
 * @property text - text to display on button, required
 * @property fn - function to execute on click, required
 * @property color - button color, defaults to gray
 * @property txtColor text color, defaults to black
 * @property isToggle - button toggleable, defaults to false
 */

import { useState } from "react"
import './Button.css'

export default function Button(props){

    const [toggle, setToggle] = useState(false)
    const text = props.text
    const fn = props.fn
    const color = props.color || "gray-bg"
    const txtColor = props.txtColor || "black"
    const isToggle = props.isToggle || false

    const className = () => {
        console.log(props)
        let base =  "button "+ color + "-bg " + txtColor;
        if(isToggle) base += toggle? " toggle" : " notoggle"
        return base;
    }

    const onClick = () => {
        console.log("btn onclick")
        //handle base button 
        if(isToggle){
            setToggle(!toggle)
        }
        //handle passed function
        fn()
    }

    return(<div className={className()} onClick={() => onClick()}>
        {text}
    </div>)

}