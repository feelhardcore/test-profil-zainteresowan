import React from "react";
import { HeadingProps } from "../../types/headingTypes.ts";
import { 
    generateHeadingClasses,
    generateHeadingInlineStyle } 
    from "./scripts/headingPropsParser.ts";

export default function Heading(props : HeadingProps){

    return (
        <div className={generateHeadingClasses(props)} style={generateHeadingInlineStyle(props)}>{props.children}</div>
    )

}

export const alignments =  {
    left : 0,
    center : 1,
    right : 2,
}
export const headingSizes = {
    small : 0,
    medium : 1,
    big : 2,
}