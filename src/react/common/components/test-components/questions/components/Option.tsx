import React from "react";
import Circle from "../../../circle/Circle.tsx";
import { OptionProps } from "../../../types/questionTypes";

export default function Option(props : OptionProps)
{

    return (
        <p onClick={props.events.onSelected}>
            <Circle backgroundColor = {props.isSelected ? "red" : "light_gray"} dimensions = {20}></Circle>
            {props.children}
        </p>
    )
    
}