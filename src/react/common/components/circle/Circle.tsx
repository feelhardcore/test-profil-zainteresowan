import { ReactNode } from "react"
import React from "react"
import { CircleProps } from "../types/circleTypes.ts"
import { generateCircleClasses, generateCircleInlineStyle } from "./scripts/circlePropsParser.ts"


export default function Circle(props : CircleProps & {children? : ReactNode | string}){

    const fn = props.events?.onClick || function (e) {}



    return (<div 
        className={generateCircleClasses(props)} 
        onClick={ e => fn(e)} 
        style = {generateCircleInlineStyle(props)}>

            {props.children}
            
        </div>)
}