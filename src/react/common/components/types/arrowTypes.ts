import { Colors, Events } from "../../../types/types"

export type FacingDirection = 0 | 1 | 2 | 3
export interface ArrowProps{
    events? : Events
    color? : Colors
    facingDirection? : FacingDirection
    lockFacing? : boolean
    dimensions? : number
}