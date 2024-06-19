import { Colors } from "chart.js"
import { CSSProperties, ReactNode, SyntheticEvent, TransitionEvent } from "react"
export type Children = {
    children? : ReactNode | string
}
export type TextAligments = "center" | "left" | "right" | "justify"
export type Positions = "static" | "relative" | "sticky" | "absolute" | "fixed" 
export type Float = "left" | "right"
export type FontSizes = "small" |"standard" | "larger" | "big" | "heading-big" | "heading-small" | "heading-medium" | "heading-big" | number
export type Units = "px" | "pt" | "%" | "rem" | "vh" | "cm" | "mm" | "in" | "pc"
export type FontStyles = "italic" | "oblique"
export type DisplayTypes = "block" | "inline_block" | "table" | "inline" | "flex"
export type FontWeights = "normal" | "bold" | "bolder" | number
export type Fonts = "text"| "text_bold"| "header" | "header_bold"
export type Colors = "red" | "blue" | "light_gray" | "light_blue" | "light_green" | "green" | "light_yellow" | "yellow" | "white" | "inherit"| number
export type BorderStyles = "solid" | "dotted" | "dashed"
export type Paragraph = {
    text : string | string[]
    style? : TextOptions
    span? : Span[][] | Span[]
    htmlProps? : HTMLProperties
}
export type Span = {
    text: string
    style? : FontProps
    htmlProps? : HTMLProperties

}

export interface HTMLProperties{
    id? : string,
    class? : string[],
    inlineCSS? : React.CSSProperties
}

/**
 *  Additional callbacks
 * 
 *  Allows usage of callbacks in child elements
 * 
 *  You can pass any number of callbacks
 * 
 *  Accepts any number of parameters
 * 
 *  Property name will be name of function to use in child element
 * 
 *  @example
 *   ```js
 *  <Element callbacks = {{
 *      callback_name : declared_function_name,
 *      another_callback_name : another_function
 *  }}/>
 * 
 *  // In Element 
 * 
 *  // Calling function
 *  props.callbacks?.callback_name?.()
 * 
 * // Calling function with parameters
 * 
 *  props.calllbacks?.callback_name?.(parameter1,parameterN)
 * ```
 * 
 *  
 */
export type Callbacks = {
    [key : string] : Callback<any>
}

export type ClickHandler = EventCallback
export type TransitionEndHandler = (e : TransitionEvent) => void
export interface Events{
    onClick? : ClickHandler
    onTransitionEnd? : TransitionEndHandler
}
export interface ReactProps{
    ref? : React.RefObject<any>
    key? : any
}
export interface Position{
    type? : Positions,
    coords? : PositionCoords | string
}
export interface BorderProps{
    color? : Colors,
    radius? : number,
    width? : number,
    style? : BorderStyles

}
export interface DimenisionProps{
    value : number | string
    unit : Units 
}
export interface MarginProps{
    margin? : string | number | boolean,
    margin_unit? : Units,
    margin_all? : {
        margin_top? : string | number,
        margin_top_unit? : Units
        margin_right? : string | number,
        margin_right_unit? : Units
        margin_bottom? : string | number,
        margin_bottom_unit? : Units
        margin_left? : string | number,
        margin_left_unit? : Units
    }

}
export interface PaddingProps{
    padding?: string | number | boolean,
    padding_unit?: string,
    padding_all?: {
        padding_top?: string | number,
        padding_top_unit?: string
        padding_right?: string | number,
        padding_right_unit?: string
        padding_bottom?: string | number,
        padding_bottom_unit?: string
        padding_left?: string | number,
        padding_left_unit?: string
    }

}

export interface FontProps{
    size? : FontSizes
    size_unit? : Units
    style? : FontStyles
    weight? : FontWeights
    family? : Fonts
    color? : Colors
}
export interface PositionCoords{
    top : number,
    bottom : number,
    left : number,
    right : number
}

export interface TextParagraphProps{
    textAlign? : TextAligments,
    border?: BorderProps,
    margin? : MarginProps,
    padding? : PaddingProps,
    position? : Positions,
    display? : DisplayTypes
    float? : Float,
    font? : FontProps
    htmlProps? : HTMLProperties
    background? : Colors
    positionCoords? : PositionCoords
    height? : DimenisionProps
    width? : DimenisionProps
}

export interface SpannableTextProps{

}

export interface TextBlock{
    paragraphs? : Paragraph[]
}

export interface TextOptions{
    font? : FontProps
}


// Expandble container



// ExpandBar 




//Arrow 



// Circle



// Button



//Category desciprion



//Headings


// Menu list

export interface MenuListProps{
    name : string
    options : MenuOption[]
}

export type EventCallback = (e : SyntheticEvent) => void
export type Callback<T> = (...params :any[]) => T 
export type VoidCallback = Callback<void>
export interface MenuOption{
    value: string
    action: string | null
    callback? : EventCallback
}

// Questiions

export type SlideInDirection = "left" | "right"

export interface QuestionPanelProps{
    question_set : number
    question_set_next : boolean
    next_direction? : SlideInDirection
    events : {
        onClick : VoidCallback
        onSlideOut : VoidCallback
    }
    current_answers : (number | null)[]
    callbacks? : Callbacks
    missing_answers? : boolean[]
    lock_slide : boolean
    
}
export interface QuestionProps{
    question_number : number,
    next_set : boolean,
    current_answer : number | null
    slideInDirection : SlideInDirection,
    events : {
        onClick : VoidCallback
        onSlideOut? : VoidCallback
    }
    missing_answer? : boolean
    lock_slide : boolean

}


export interface SlidingQuestionProps{
    question_number : number,
    slide_direction : SlideDirection
    current_answer : number | null
    events : {
        onClick : VoidCallback
        onFinishedSlidingOut? : VoidCallback
    }
    last_question? : boolean
    slide_out?: boolean
}
export type SlideDirection = "left" | "right"

e

/**
 * Use if 
 */
export interface CustomQuestion{

}








export type TransitionType = "slide-in-out" |  "show-and-hide" | "both"

export type NextPageDirection = "forwards" | "backwards"



export interface SingleChoiceQuestionProps{
    questionNumber : number,
    questionCount : number
    default? : number
    options: {
        [key : string] : string
    }
    current_answer? : number
    error? : Error
    events : {
        onAnswerSelect : {
            handler : VoidCallback
        }
    }

}
export interface Error{
    isError?: boolean
    errors : string[]
}


export interface InterestsTestResultsPageProps{
    results : number[]
}