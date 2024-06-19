
import './Popup.css'
import { useEffect, useState } from "react"
import React from "react"
import { popup } from '../../../../App'
import { backgrounds, colors } from '../../../../common/data/colors'
import { popup_types } from '../../../../common/data/popup_types'

export default function Popup(_ : any){
    const [type,setType] = useState(0)
    const [text,setText] = useState("")
    const [duration,setDuration] = useState(0)
    const [key,setKey] = useState(Math.random())
    const [animationActive,setAnimationActive] = useState(false)

    const className = () => {
        let classlist : string[] = []
        classlist.push("info-popup")
        
        switch (type){
            case popup_types.info:
                classlist.push(backgrounds.light_blue)
                break;
            case popup_types.warn:
                classlist.push(backgrounds.light_yellow)
                break
            case popup_types.error:
                classlist.push(backgrounds.red)
                classlist.push(colors.white)
            
        }
        return classlist.join(" ")
    }


    const showPopup = (type,text,duration) => {
        console.log(key)
        setKey(Math.random())
        setType(type)
        setText(text)
        setDuration(duration)
        setAnimationActive(true)
    }
    useEffect(() => {
        popup.show = showPopup
    })

    const onAnimEnd = (e) => {
        setAnimationActive(false)
    }

    return <div key={key} className={className()} style={{display : animationActive? "block" : "none"}} onAnimationEnd={e => onAnimEnd(e)}> 
        {text}
    </div>
}