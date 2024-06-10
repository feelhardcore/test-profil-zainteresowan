import { PropsWithChildren, SyntheticEvent, createRef} from "react";
import { ExpandbleContainerProps, HTMLProperties } from "../types";
import React from "react";
import ExpandBar from "../ExpandBar.tsx";
import Container from "./Container.tsx";

export default function ExpandableContainer( props : PropsWithChildren<ExpandbleContainerProps> ) {
    
    const expandableRef = createRef<HTMLDivElement>()

    
    const expandContainer = (_ : SyntheticEvent) => {

        console.error("XD")
        expandableRef.current?.classList.toggle("collapsed")
        
    }

    let htmlProps : HTMLProperties = Object.create(props.htmlProps || {})
    if(htmlProps.class){
        htmlProps.class.push("expandable collapsed")
    }
    else htmlProps.class = ["expandable collapsed"]


    



    return(
            <>
            <Container 
            {...props} 
            htmlProps={htmlProps}
            react={{ref : expandableRef}}
             >

                {props.children}

                </Container>

                <ExpandBar 
                events={{
                    onClick : expandContainer
                }}
                arrowProps={{
                    facingDirection : 2,
                    lockFacing : false
                }}
                /> 
            </>
    )

}