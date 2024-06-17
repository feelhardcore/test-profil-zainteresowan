import { CSSProperties } from "react"
import { BorderProps, MarginProps, PaddingProps, Position, DisplayTypes, Float, FontProps, HTMLProperties, PositionCoords, DimenisionProps, ReactProps, Events, Colors, Children, Children } from "../../../types/types"
import { TextAligments } from "../containers/Container"

export interface ContainerProps extends Children{
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
    style? : CSSProperties
    
}

export type ExpandDirection = "topdown" | "bottomup" | "leftright" | "rightleft"
export type ExpandBehavior = ""
export interface ExpandbleContainerProps extends ContainerProps{
    expandDirection : ExpandDirection
    expandBehavior : ExpandBehavior
    maxHeight : DimenisionProps | string
} 