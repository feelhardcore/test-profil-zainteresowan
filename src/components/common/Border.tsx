import React from "react";
import { colors } from "../../common/data/colors";
import { PropsWithChildren } from "react";

export interface BorderProps{
    color? : string,
    radius? : number,
    width? : number,

}

export const borderWidths = {
    small : 1,
    medium : 3,
    wide : 5,
    xwide : 7
}

export const borderRadiuses = {
    small : 2,
    medium : 4,
    big : 6,
    xbig : 8
}



export default function Border(props : PropsWithChildren<BorderProps>)
{

    const borderColor = props.color || colors.blue
    const borderRadius = props.radius || 0
    const borderWidth = props.width || 1

    const classes = () => {

        return ""

    }

    const inlineStyle = () => {

        return {
            border : borderWidth+"px solid var(--"+borderColor+")",
            borderRadius : borderRadius+"px",
            padding : "10px"
        }
    }

    return(<div className= {classes()} style = {inlineStyle()}>
        {props.children}
    </div>)

}