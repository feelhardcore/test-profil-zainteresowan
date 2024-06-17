import { CSSProperties } from "react"
import { COLOR } from "../../../../../components/common/classes_constants"
import { isStringType, parseInlineBackground, isNumberType } from "../../../scripts/propsParser.ts"
import { CircleProps } from "../../types/circleTypes.ts"

export function generateCircleClasses(props : CircleProps){

    let classes = ["circle"]
    if(isStringType(props.backgroundColor)){
        classes.push(COLOR[props.backgroundColor]+"-bg")
    }
    return classes.join(" ")


}
export function generateCircleInlineStyle(props : CircleProps){
    let style : CSSProperties = {}
    parseInlineBackground(style,props.backgroundColor)
    if(isNumberType(props.outlineColor)){
        let hex = "#"+props.outlineColor?.toString(16).padStart(6,"0")
        style.borderColor = hex
    }
    else{
        style.borderColor = props.outlineColor as string || "blue"
    }
    
    style.borderWidth = props.width || 1
    style.height = props.dimensions || 50
    style.width = props.dimensions || 50
    return style
}