import React from "react";
import generateHeadingInlineStyle, { generateHeadingClasses } from "../common/propParser.ts";
import { HeadingProps } from "../common/types.ts";

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