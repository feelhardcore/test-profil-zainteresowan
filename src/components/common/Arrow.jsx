import { useState } from "react";
import Circle from "./Circle";

export default function Arrow(props){
    const lockFacing = props.lockFacing || false
    const [facing,setFacing] = useState(props.facing)

    const nullfbn = () => null;
    const onClickFunc = props.fn || nullfbn

    

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
        setFacing((facing+2)%4)

    }
    const onClick = () => {
        //handle base
        swapDirection()
        //handle passed
        onClickFunc()
    }

    return(<Circle fn = {() => onClick()} dims = {50}>
        <div className={className()}></div>
    </Circle>)
}


export const direction = {
    top: 0,
    right : 1,
    bottom : 2,
    left : 3
}