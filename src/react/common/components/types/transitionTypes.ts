import { MutableRefObject, ReactNode, Ref } from "react"
import { Children, TransitionType, SlideDirection, TransitionEndHandler, NextPageDirection, VoidCallback } from "../../../types/types"
import { ContainerProps } from "./containerTypes"

export interface TransitionProps extends Children{
    type: TransitionType,
    base_speed : number,
    delay? : number
    direction_in? : SlideDirection
    direction_out? : SlideDirection
    events?: {
        onTransitionedOut? : TransitionEndHandler
    }
    triggerOut? : boolean
    next_page_direction? : NextPageDirection
    update_static? : boolean
    

}

export interface TransitionGroupProps{
    type: TransitionType,
    base_speed : number,
    delay? : number
    direction_in? : SlideDirection
    direction_out? : SlideDirection
    events?: {
        onTransitionedOut? : VoidCallback
    }
    items : ReactNode[]
    next_page_direction? : NextPageDirection
    outerContainerProps? : ContainerProps
    update_errors? : boolean
    transitionRef : MutableRefObject<boolean>
}