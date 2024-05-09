import { ReactNode } from "react"
import { CircleProps } from "./types"
import React from "react"
import { generateCircleClasses, generateCircleInlineStyle } from "./propParser.ts"

export default function Circle(props : CircleProps & {children? : ReactNode | string}){

    const fn = props.events?.onClick || function (e) {}



    return (<div 
        className={generateCircleClasses(props)} 
        onClick={ e => fn(e)} 
        style = {generateCircleInlineStyle(props)}>

            {props.children}
            
        </div>)
}