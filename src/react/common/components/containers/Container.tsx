import React, { useRef } from "react";
import { ContainerProps } from "../types/containerTypes";
import { generateContainerClasses, generateContainerInlineStyle } from "./scripts/containerPropsParser.ts";



export type TextAligments = "center" | "left" | "right" | "justify"



export const borderWidths = {
    small : 1,
    medium : 3,
    wide : 5,
    xwide : 7
}

export const borderRadiuses = {
    small : 2,
    medium : 4,
    big : 6,
    xbig : 8
}



export default function Container(props : ContainerProps)
{


    const classes  = () => {

        let classes : string[] = [] 
        classes.push(...props.htmlProps?.class as [])

        if(props.textAlign)

        return classes.join(' ')
    }

    const inlineStyle = () => {

        return {
        }
    }

    function generateClassNames(): string  {
        return generateContainerClasses(props)
        
    }

    

    function generateInlineStyle(): React.CSSProperties | undefined {
        
        return generateContainerInlineStyle(props)
    }

    return(<div 
        onClick={e => props.events?.onClick?.(e) } 
        onTransitionEnd={e =>props.events?.onTransitionEnd?.(e)}
        ref = {props.react && props.react.ref} 
        id = {props.htmlProps?.id} 
        className= {generateClassNames()} 
        style = {generateInlineStyle()}>
        {props.children}
    </div>)

}


