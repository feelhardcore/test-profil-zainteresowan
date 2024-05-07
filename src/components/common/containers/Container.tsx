import React, { useRef } from "react";
import { backgrounds, colors } from "../../../common/data/colors.js";
import { PropsWithChildren } from "react";
import { BorderProps } from "../Border.tsx";
import { ContainerProps, DisplayTypes, Float, FontProps, FontStyles, Positions, Colors } from "../types.ts";
import { BORDER_STYLE, COLOR, DISPLAY, FLOAT, FONT_SIZE, FONT_STYLE, FONT_WEIGHT, POSITION, TEXT_ALIGN } from "../classes_constants.js";
import { generateContainerClasses, generateContainerInlineStyle } from "../propParser.ts";


export type TextAligments = "center" | "left" | "right" | "justify"



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



export default function Container(props : PropsWithChildren<ContainerProps>)
{


    const classes  = () => {

        let classes : string[] = [] 
        classes.push(...props.htmlProps?.class as [])

        if(props.textAlign)

        return classes.join(' ')
    }

    const inlineStyle = () => {

        return {
        }
    }

    function generateClassNames(): string  {
        return generateContainerClasses(props)
        
    }

    

    function generateInlineStyle(): React.CSSProperties | undefined {
        
        return generateContainerInlineStyle(props)
    }

    return(<div id = {props.htmlProps?.id} className= {generateClassNames()} style = {generateInlineStyle()}>
        {props.children}
    </div>)

}


