import { PropsWithChildren, createRef, useRef, useState } from "react";
import { ContainerProps, ExpandbleContainerProps } from "./common/types";
import { Container } from "react-dom";
import { generateContainerClasses, generateContainerInlineStyle, generateExpandableContainerClasses } from "./common/propParser";
import React from "react";
import ExpandBar from "./common/ExpandBar";

export default function ExpandableContainer( props : PropsWithChildren<ExpandbleContainerProps> ) {
    
    const expandableRef = createRef<HTMLDivElement>()
    const [expanded, setExpanded] = useState(false)


    return(
        <div className = {generateExpandableContainerClasses(props)} style = {generateContainerInlineStyle(props)} id = {props.htmlProps?.id} >
            {props.before}
            <div ref = {expandableRef} className= {"expandable-content "+ generateContainerClasses(props.expandableContainerProps)} style = {generateContainerInlineStyle(props.expandableContainerProps)}>
                {props.children}
                <ExpandBar fn = {() => } facing = {}/>
            </div>
            {props.after}
        </div>
    )

}