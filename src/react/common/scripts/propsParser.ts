import { ContainerProps, DisplayTypes, Float, FontProps, Colors, TextAligments, BorderProps, MarginProps, PaddingProps, Position, DimenisionProps, ExpandbleContainerProps, PositionCoords, CircleProps, ButtonProps, HeadingProps, QuestionProps, SlidingQuestion, SlidingQuestionProps, SingleChoiceQuestionProps } from "../../types/types.ts";
import { BORDER_STYLE, COLOR, DISPLAY, FLOAT, FONT, FONT_SIZE, FONT_STYLE, FONT_WEIGHT, POSITION, TEXT_ALIGN } from "../../../components/common/classes_constants.js";
import { CSSProperties, PropsWithChildren } from "react";

export function parseTextAlign(textAligment? : TextAligments): string[] | [] {

    if(textAligment){
         return [TEXT_ALIGN[textAligment]]
    }
    return []
 }
export function parseDisplayType(display?: DisplayTypes): string[] | [] {
     if(display){
         return [DISPLAY[display]]
    }
    return []
 }
 
export function parsePosition(position?: Position) : string[] | [] {
     if(position?.type){
         return [POSITION[position.type]]
     }
    return []
 }
 
export function parseFloatDirection(float?: Float): string[] | [] {
     if(float){
        return [FLOAT[float]]
     }
     return []
 }
export function parseFont(font?: FontProps): string[] {
     let classList: string[] = []
     if(font){
         if(font.color && !isNumberType(font.color))
            classList.push(COLOR[font.color])
         if(font.size && !isNumberType(font.size)){
            classList.push(FONT_SIZE[font.size])
         } 
         if(font.style){
             classList.push(FONT_STYLE[font.style])
         }
         if(font.weight && !isNumberType(font.weight)) classList.push(FONT_WEIGHT[font.weight])

        if(font.family){
            classList.push(FONT[font.family])
        }
         
     }
     return classList
 }
 
export function parseBackgroud(background?: Colors): string[] | [] {
     if(background && !isNumberType(background)) return [COLOR[background]+"-bg"]
     return []
 }
export function isNumberType(type : any | number){
     return isType(type, "number")
 }
export function isStringType(type : any | string){
    return isType(type, "string")
}
export function isType(value : any,type : string) {
    if (type === undefined) return false
    if(typeof value === type) return true; return false
}



export function parseInlineBackground(style : React.CSSProperties, background? : Colors) : void {
    if(background && isNumberType(background)){
        let hex = "#"+background.toString(16).padStart(6,"0")
        style.background = hex
    }
}
export function parseInlineBorder( style : CSSProperties, border? : BorderProps | string) {
    if(border){
        if(isStringType(border)){
            style.border = border as string
        }
        else {
            border = border as BorderProps
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
}
export function parseInlineFont(style : CSSProperties, font? : FontProps){
    if(font){
        if(isNumberType(font.size)) 
            style.fontSize = font.size+ (font.size_unit || "pt")
        if(isNumberType(font.weight))
            style.fontWeight = font.weight
        if(isNumberType(font.color) && font.color){
            let hex = "#"+font.color.toString(16).padStart(6,"0")
            style.color = hex
        }
        console.log(style.fontSize)
    }
}

export function parseInlineMargin(style : CSSProperties, margin?: MarginProps | string){
    if(margin){
        if(isStringType(margin)){
            style.margin = margin as string
        }
        else{
            margin = margin as MarginProps
            if(isNumberType(margin.margin)){
                style.margin = margin.margin + (margin.margin_unit || "px")
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
}
export function parseInlinePadding(style : CSSProperties, padding?: PaddingProps | string){
    if(padding){
        if(isStringType(padding)){
            style.padding = padding as string
        }
        else {
            padding = padding as PaddingProps
            if(isNumberType(padding.padding)){
                style.padding = padding.padding + (padding.padding_unit || "px")
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
}

export function parseInlinePosition(style : CSSProperties, position? : Position){
    if(position?.type){
        if(position.type !== "static"){
            if(isStringType(position.coords))
                style.inset = position.coords as string
            else{
                position.coords = position.coords as PositionCoords
                style.top = position.coords?.top
                style.bottom = position.coords?.bottom
                style.left = position.coords?.left
                style.right = position.coords?.right
            }
            
        }
    }
}
export function parseInlineHeight(style : CSSProperties, height? : DimenisionProps | string){

    if(height){
        if(isStringType(height)){
            style.height = height as string
        }
        else{
            height = height as DimenisionProps
            if(isNumberType(height.value)){
                style.height = height.value+ (height.unit || "px")
            }
            else {
                style.height = height.value
            }
        }
        
    }

}
export function parseInlineWidth(style : CSSProperties, width? : DimenisionProps | string){

    if(width){
        if(isStringType(width)){
            style.width = width as string
        }

        else {
            width = width as DimenisionProps
            if(isNumberType(width.value)){
                style.width = width.value+ (width.unit || "px")
            }
            else {
                style.width = width.value
            }
        }
        
    }
    
}
export function parseInlineMaxHeight(style : CSSProperties, maxHeight? : DimenisionProps | string){

    if(maxHeight){
        if(isStringType(maxHeight)){
            style.maxHeight = maxHeight as string
        }
        else{
            maxHeight = maxHeight as DimenisionProps
            if(isNumberType(maxHeight.value)){
                style.maxHeight = maxHeight.value+ (maxHeight.unit || "px")
            }
            else {
                style.maxHeight = maxHeight.value
            }
        }
        
    }

}
export function parseInlineMaxWidth(style : CSSProperties, maxWidth? : DimenisionProps | string){

    if(maxWidth){
        if(isStringType(maxWidth)){
            style.maxWidth = maxWidth as string
        }

        else {
            maxWidth = maxWidth as DimenisionProps
            if(isNumberType(maxWidth.value)){
                style.maxWidth = maxWidth.value+ (maxWidth.unit || "px")
            }
            else {
                style.maxWidth = maxWidth.value
            }
        }
        
    }
    
}





//Circle component class parser 



// Button



// Headings




// Questions

export function generateQuestionClasses(props : QuestionProps) {
    let classes = ["question"]
    if(!props.next_set)
    if(!props.lock_slide)
    classes.push(props.slideInDirection ? "question-from-left" : "question-from-right")
    else classes.push("immovable")
    if(props.missing_answer) classes.push("missing-answer")
    return classes.join(" ")
}

export function generateSingleChoiceQuestionClasses(error? : boolean) {
    let classes = ["question"]
    if(error){
        classes.push("not-selected")
    }
    return classes.join(" ")
}

export function generateSlidingQuestionClasses(props : SlidingQuestionProps,state : number){

    let classes = ["question"]
    if(state == 0){
        classes.push(props.slide_direction === "left" ? "question-from-left" : "question-from-right")
    }
    else if (state == 1){
        classes.push("question-static")
    }
    else if( state == 2){
        classes.push(props.slide_direction === "left" ? "slide-out-left" : "slide-out-right")
    }
    return classes.join(" ")

}

export function generateQuestionStyle(props : QuestionProps) : CSSProperties
{
    return {
        transitionProperty: "all", 
        transitionDuration: "0.5s", 
        transitionTimingFunction: "ease", 
        transitionDelay: animationDelay(props.question_number)   
    }
}
function animationDelay(question_number){
    return (0.05*(question_number%10))+"s"
}