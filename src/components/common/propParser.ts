import { ContainerProps, DisplayTypes, Float, FontProps, FontStyles, Positions, Colors, TextAligments, BorderProps, MarginProps, PaddingProps, Position, DimenisionProps, ExpandbleContainerProps } from "../common/types.ts";
import { BORDER_STYLE, COLOR, DISPLAY, FLOAT, FONT_SIZE, FONT_STYLE, FONT_WEIGHT, POSITION, TEXT_ALIGN } from "../common/classes_constants.js";
import { CSSProperties, PropsWithChildren } from "react";

function parseTextAlign(textAligment? : TextAligments): string[] | [] {

    if(textAligment){
         return [TEXT_ALIGN[textAligment]]
    }
    return []
 }
 function parseDisplayType(display?: DisplayTypes): string[] | [] {
     if(display){
        console.log(display)
         return [DISPLAY[display]]
    }
    return []
 }
 
 function parsePosition(position?: Position) : string[] | [] {
     if(position?.type){
         return [POSITION[position.type]]
     }
    return []
 }
 
 function parseFloatDirection(float?: Float): string[] | [] {
     if(float){
        return [FLOAT[float]]
     }
     return []
 }
 function parseFont(font?: FontProps): string[] {
     let classList: string[] = []
     if(font){
         if(font.color && !isNumberType(font.color))
            classList.push(COLOR[font.color])
         if(font.font){
 
         }
         if(font.size && !isNumberType(font.size)){
            classList.push(FONT_SIZE[font.size])
         } 
         if(font.style){
             classList.push(FONT_STYLE[font.style])
         }
         if(font.weight && !isNumberType(font.weight)) classList.push(FONT_WEIGHT[font.weight])
         
     }
     return classList
 }
 
 function parseBackgroud(background?: Colors): string | [] {
     if(background && !isNumberType(background)) return COLOR[background]+"-bg"
     return []
 }
 function isNumberType(type : any){
     if( type == undefined) return false
     return typeof type === "number"
 }

export function generateContainerClasses(props : PropsWithChildren<ContainerProps>) : string {

    let classList : string[] = []
    if(!props) return ""
    console.log(props?.htmlProps)
    if(props.htmlProps){
        classList.push(...props.htmlProps?.class as [])
    }
    
    classList.push(...parseTextAlign(props.textAlign))
    classList.push(...parseDisplayType(props.display))
    classList.push(...parsePosition(props.position))
    classList.push(...parseFloatDirection(props.float))
    classList.push(...parseFont(props.font))
    classList.push(...parseBackgroud(props.background))
    console.log(classList)
        


        return classList.join(" ")

}


export function generateContainerInlineStyle(props : PropsWithChildren<ContainerProps>): React.CSSProperties | undefined {
    let style : React.CSSProperties = {} 

    
    
    parseInlineBackground(style,props.background)
    parseInlineBorder(style, props.border)
    parseInlineFont(style,props.font)
    parseInlineHeight(style,props.height)
    parseInlineMargin(style,props.margin)
    parseInlinePadding(style,props.padding)
    parseInlinePosition(style,props.position)
    parseInlineWidth(style,props.width)
    
    


    
    
    
    console.log(style)

    return style
}

function parseInlineBackground(style : React.CSSProperties, background? : Colors) : void {
    if(background && isNumberType(background)){
        let hex = "#"+background.toString(16).padStart(6,"0")
        style.background = hex
    }
}
function parseInlineBorder( style : CSSProperties, border? : BorderProps) {
    if(border){
        if(border.color){
            let color : string;
            if (isNumberType(border.color)){
                color = "#"+border.color.toString(16).padStart(6,"0")
            }
            else color = "var(--"+COLOR[border.color]+")"
            style.borderColor = color
        }
        if(border.style){
            style.borderStyle = BORDER_STYLE[border.style]
        }
        if(border.radius){
            style.borderRadius = border.radius+ "px"
        }
        if(border.width) style.borderWidth = border.width+"px"
    }
}
function parseInlineFont(style : CSSProperties, font? : FontProps){
    if(font){
        if(isNumberType(font.size)) 
            style.fontSize = font.size+ " "+ (font.size_unit || "pt")
        if(isNumberType(font.weight))
            style.fontWeight = font.weight
        if(isNumberType(font.color) && font.color){
            let hex = "#"+font.color.toString(16).padStart(6,"0")
            style.color = hex
        }
    }
}

function parseInlineMargin(style : CSSProperties, margin?: MarginProps){
    if(margin){
        if(isNumberType(margin.margin)){
            style.margin = margin.margin + (margin.margin_unit || "px")
        }
        else if (typeof margin.margin === "string"){
            style.margin = margin.margin
        }
        else if (typeof margin.margin === "boolean"){
            if(margin.margin === true){
                /* to-do check for unit already in value stirng */
                if(margin.margin_all?.margin_top)
                    style.marginTop = margin.margin_all.margin_top + (margin.margin_all.margin_top_unit || "px")
                if(margin.margin_all?.margin_bottom)
                    style.marginBottom = margin.margin_all.margin_bottom + (margin.margin_all.margin_bottom_unit || "px")
                if(margin.margin_all?.margin_left)
                    style.marginLeft = margin.margin_all.margin_left + (margin.margin_all.margin_left_unit || "px")
                if(margin.margin_all?.margin_right)
                    style.marginRight = margin.margin_all.margin_right + (margin.margin_all.margin_right_unit || "px")
            }
        }
    }
}
function parseInlinePadding(style : CSSProperties, padding?: PaddingProps){
    if(padding){
        if(isNumberType(padding.padding)){
            style.padding = padding.padding + (padding.padding_unit || "px")
        }
        else if (typeof padding.padding === "string"){
            style.padding = padding.padding
        }
        else if (typeof padding.padding === "boolean"){
            if(padding.padding === true){
                /* to-do check for unit already in value stirng */
                if(padding.padding_all?.padding_top)
                    style.paddingTop = padding.padding_all.padding_top + (padding.padding_all.padding_top_unit || "px")
                if(padding.padding_all?.padding_bottom)
                    style.paddingBottom = padding.padding_all.padding_bottom + (padding.padding_all.padding_bottom_unit || "px")
                if(padding.padding_all?.padding_left)
                    style.paddingLeft = padding.padding_all.padding_left + (padding.padding_all.padding_left_unit || "px")
                if(padding.padding_all?.padding_right)
                    style.paddingRight = padding.padding_all.padding_right + (padding.padding_all.padding_right_unit || "px")
            }
        }
    }
}

function parseInlinePosition(style : CSSProperties, position? : Position){
    if(position?.type){
        if(position.type !== "static"){
            style.top = position.coords?.top
            style.bottom = position.coords?.bottom
            style.left = position.coords?.left
            style.right = position.coords?.right
        }
    }
}
function parseInlineHeight(style : CSSProperties, height? : DimenisionProps){

    if(height){
        if(isNumberType(height.value)){
            style.height = height.value+ (height.unit || "px")
        }
        else {
            style.height = height.value
        }
    }

}
function parseInlineWidth(style : CSSProperties, width? : DimenisionProps){

    if(width){
        if(isNumberType(width.value)){
            style.width = width.value+ (width.unit || "px")
        }
        else {
            style.width = width.value
        }
    }
    
}


export function generateExpandableContainerClasses(props: PropsWithChildren<ExpandbleContainerProps>): string | undefined {
    let classes = ["collapsable-container"]
    return "expandable-container " + generateContainerClasses(props)
}