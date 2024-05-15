import { Colors } from "chart.js"
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES, ReactNode, SyntheticEvent, TransitionEvent } from "react"
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
export interface ContainerProps{
    textAlign? : TextAligments,
    border?: BorderProps | string,
    margin? : MarginProps | string,
    padding? : PaddingProps | string,
    position? : Position,
    display? : DisplayTypes
    float? : Float,
    font? : FontProps
    htmlProps? : HTMLProperties
    background? : Colors
    positionCoords? : PositionCoords
    height? : DimenisionProps | string
    width? : DimenisionProps | string
    maxWidth? : DimenisionProps | string
    maxHeight? : DimenisionProps | string
    react? : ReactProps
    events? : Events

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

export type ExpandDirection = "topdown" | "bottomup" | "leftright" | "rightleft"
export type ExpandBehavior = ""
export interface ExpandbleContainerProps extends ContainerProps{
    expandDirection : ExpandDirection
    expandBehavior : ExpandBehavior
    maxHeight : DimenisionProps | string
} 

// ExpandBar 

export type FacingDirection = 0 | 1 | 2 | 3
export interface ExpandBarProps{
    events? : Events
    arrowProps? : ArrowProps
}

//Arrow 

export interface ArrowProps{
    events? : Events
    color? : Colors
    facingDirection? : FacingDirection
    lockFacing? : boolean
    dimensions? : number
}

// Circle

export interface CircleProps{
    backgroundColor? : Colors
    dimensions? : number
    width? : number
    events? : Events
    outlineColor? : Colors

}

// Button

export interface ButtonProps{
    events : Events,
    toggleable? : boolean,
    initialToggleState? : boolean
    font? : FontProps,
    background? : Colors
    padding? : PaddingProps | string
    margin? : MarginProps | string
    disabled? : boolean
    shouldHandleDisabled? : boolean
    children? : ReactNode | string
}

//Category desciprion

export interface CategoryDescriptionProps extends ContainerProps{
    category_name : string
    category_content_before? : ReactNode | string
    category_content_expandable? : ReactNode | string
    category_content_after? : ReactNode | string

}

//Headings

export type HeadingSizes = "small" | "medium" | "big"

export interface HeadingProps extends Children{
    size : HeadingSizes
    background? : Colors
    alignment? : TextAligments
    font? : FontProps
}
export type SizelessHeadingProps = Omit<HeadingProps,"size">


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

}