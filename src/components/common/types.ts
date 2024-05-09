import { Colors } from "chart.js"
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES, ReactNode, SyntheticEvent } from "react"

export type TextAligments = "center" | "left" | "right" | "justify"
export type Positions = "static" | "relative" | "sticky" | "absolute" | "fixed" 
export type Float = "left" | "right"
export type FontSizes = "standard" | "larger" | "big" | "heading-big" | "heading-small" | "heading-medium" | "heading-big" | number
export type Units = "px" | "pt" | "%" | "rem" | "vh" | "cm" | "mm" | "in" | "pc"
export type FontStyles = "italic" | "oblique"
export type DisplayTypes = "block" | "inline_block" | "table" | "inline" | "flex"
export type FontWeights = "normal" | "bold" | "bolder" | number
export type Fonts = "text"| "text_bold"| "header" | "header_bold"
export type Colors = "red" | "blue" | "light_gray" | "light_blue" | "light_green" | "green" | "light_yellow" | "yellow" | "white" | number
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
export interface Events{
    onClick?(event : SyntheticEvent) : void
}
export interface ReactProps{
    ref? : React.RefObject<any>
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
    padding? : PaddingProps
    margin? : MarginProps
    disabled? : boolean
    shouldHandleDisabled? : boolean
    children? : ReactNode | string
}


export interface CategoryDescription{
    category_name : string
    category_content_before? : ReactNode | string
    category_content_expandable? : ReactNode | string
    category_content_after? : ReactNode | string

}