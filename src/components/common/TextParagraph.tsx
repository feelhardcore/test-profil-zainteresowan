import React ,{ PropsWithChildren } from "react";
import { Paragraph } from "./types";

export default function TextParagraph( props : PropsWithChildren<Paragraph>){


    function generateClassName(): string | undefined {
        let classList : string[] = []
        classList.push(...props.htmlProps?.class as [])
        
        console.log(classList)
        


        return classList.join(" ")
    }

    return(
        <p id = {props.htmlProps?.id} className={generateClassName()}></p>
    )
}