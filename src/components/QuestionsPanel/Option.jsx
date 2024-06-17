import { useEffect, useState } from "react";
import { backgrounds } from "../../common/data/colors";
import Circle from "../../react/common/components/circle/Circle.tsx";

export default function Option(props)
{

    const selected = props.selected

    const hook = props.answerHook
    return (
        <p onClick={() => hook()}>
            <Circle color = {selected ? backgrounds.red : backgrounds.light_gray} dims = {20}></Circle>
            {props.children}
        </p>
    )
    
}