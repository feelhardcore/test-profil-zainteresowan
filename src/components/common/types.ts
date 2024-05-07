import { Colors } from "chart.js"
import { ReactNode } from "react"

export type TextAligments = "center" | "left" | "right" | "justify"
export type Positions = "static" | "relative" | "sticky" | "absolute" | "fixed" 
export type Float = "left" | "right"
export type FontSizes = "standard" | "larger" | "big" | "heading-big" | "heading-small" | "heading-medium" | "heading-big" | number
export type Units = "px" | "pt" | "%" | "rem" | "vh" | "cm" | "mm" | "in" | "pc"
export type FontStyles = "italic" | "oblique"
export type DisplayTypes = "block" | "inline_block" | "table" | "inline" | "flex"
export type FontWeights = "normal" | "bold" | "bolder" | number
export type Fonts = "Arial"
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
    border?: BorderProps,
    margin? : MarginProps,
    padding? : PaddingProps,
    position? : Position,
    display? : DisplayTypes
    float? : Float,
    font? : FontProps
    htmlProps? : HTMLProperties
    background? : Colors
    positionCoords? : PositionCoords
    height? : DimenisionProps
    width? : DimenisionProps
    maxWidth? : DimenisionProps
    maxHeight? : DimenisionProps

}
export interface Position{
    type? : Positions,
    coords? : PositionCoords
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
    font? : Fonts
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
    before? : ReactNode | string
    after? : ReactNode | string
    direction : ExpandDirection
    expandBehavior : ExpandBehavior
    expandableContainerProps : ContainerProps
} 

//