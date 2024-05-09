import { SyntheticEvent, useState } from "react";
import Circle from "./Circle.tsx";
import { ArrowProps, FacingDirection } from "./types";
import React from "react";

export default function Arrow(props : ArrowProps){
    const lockFacing = props.lockFacing || false
    const initialFacing = props.facingDirection === undefined ? 2 : props.facingDirection
    const [facing,setFacing] = useState(initialFacing)

    const nullfbn = () => null;
    const onClickFunc = props.events?.onClick || nullfbn

    

    const className = () => {
        let base = "arrow ";
        let facingClass;
        switch(facing){
            case 0 : facingClass = "arrow-top"; break;
            case 1 : facingClass = 'arrow-right'; break;
            case 2 : facingClass = 'arrow-bottom'; break;
            default : facingClass = 'arrow-left'
        }
        return base+facingClass;
    }

    const swapDirection =  () => {
        if (lockFacing) return;
        setFacing((facing+2)%4 as FacingDirection)

    }
    const onClick = (e : SyntheticEvent) => {
        //handle base
        swapDirection()
        //handle passed
        onClickFunc(e)
    }

    return(<Circle 
        events={{
            onClick : onClick
        }}
    >
        <div className={className()}></div>
    </Circle>)
}


export const direction = {
    top: 0,
    right : 1,
    bottom : 2,
    left : 3
}