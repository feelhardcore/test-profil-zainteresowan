import { ReactNode } from "react"
import { Colors, Events, FontProps, MarginProps, PaddingProps } from "../../../types/types"

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
    children : ReactNode | string
}