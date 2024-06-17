import { parseTextAlign, parseDisplayType, parsePosition, parseFloatDirection, parseFont, parseBackgroud, parseInlineBackground, parseInlineBorder, parseInlineFont, parseInlineHeight, parseInlineMargin, parseInlinePadding, parseInlinePosition, parseInlineWidth, parseInlineMaxWidth, parseInlineMaxHeight } from "../../../scripts/propsParser.ts"
import { ContainerProps } from "../../types/containerTypes.ts"

export function generateContainerClasses(props : ContainerProps) : string {

    let classList : string[] = []
    if(!props) return ""
    if(props.htmlProps?.class){
        classList.push(...props.htmlProps?.class as [])
    }
    
    classList.push(...parseTextAlign(props.textAlign))
    classList.push(...parseDisplayType(props.display))
    classList.push(...parsePosition(props.position))
    classList.push(...parseFloatDirection(props.float))
    classList.push(...parseFont(props.font))
    classList.push(...parseBackgroud(props.background))
        


        return classList.join(" ")

}


export function generateContainerInlineStyle(props : ContainerProps): React.CSSProperties | undefined {
    let style : React.CSSProperties = {} 
    if(props.style) return props.style

    
    
    parseInlineBackground(style,props.background)
    parseInlineBorder(style, props.border)
    parseInlineFont(style,props.font)
    parseInlineHeight(style,props.height)
    parseInlineMargin(style,props.margin)
    parseInlinePadding(style,props.padding)
    parseInlinePosition(style,props.position)
    parseInlineWidth(style,props.width)
    parseInlineMaxWidth(style, props.maxWidth)
    parseInlineMaxHeight(style,props.maxHeight)

    return style
}