import { HeadingProps } from "../../../types/headingTypes";

import { 
    parseBackgroud, 
    parseFont, 
    parseInlineBackground, 
    parseInlineFont, 
    parseTextAlign } 
    from "../../../../scripts/propsParser.ts";
import { CSSProperties } from "react";

export function generateHeadingClasses(props : HeadingProps){
    let classes = ["heading"]
    switch(props.size)
    {
        case "medium" : classes.push("heading-medium"); break;
        case "big" : classes.push("heading-big"); break;
        case "small": 
        default: classes.push("heading-small"); break;
    }
    classes.push(...parseTextAlign(props.alignment))
    classes.push(...parseBackgroud(props.background))
    classes.push(...parseFont(props.font))
    return classes.join(" ")

}
export function generateHeadingInlineStyle(props : HeadingProps){
    let style : CSSProperties = {}
    parseInlineFont(style, props.font)
    parseInlineBackground(style, props.background)
    return style
}