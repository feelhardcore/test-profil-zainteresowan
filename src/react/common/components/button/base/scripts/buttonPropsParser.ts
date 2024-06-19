import { CSSProperties } from "react"
import { 
    parseBackgroud, 
    parseInlineBackground, 
    parseInlinePadding, 
    parseInlineMargin, 
    parseInlineFont } 
    from "../../../../scripts/propsParser.ts"
import { ButtonProps } from "../../../types/buttonTypes.ts"

export function generateButtonClasses(props : ButtonProps){
    let classes = ["button"]
    if(props.toggleable){
        classes.push(
            props.initialToggleState === true ? "toggle" : "notoggle"
        )
    }
    if(props.font){

    }
    if(props.margin){

    }
    classes.push(...parseBackgroud(props.background))

    return classes.join(" ")

}
export function generateButtonInlineStyle(props : ButtonProps){
    let style : CSSProperties = {display : "block"}
    parseInlineBackground(style,props.background)
    parseInlinePadding(style,props.padding)
    parseInlineMargin(style,props.margin)
    parseInlineFont(style,props.font)
    if(props.disabled){
        style.opacity = 0.5
    }
    return style

}