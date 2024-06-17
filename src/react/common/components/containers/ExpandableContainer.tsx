import { SyntheticEvent, createRef} from "react";
import React from "react";
import ExpandBar from "./components/ExpandBar.tsx";
import Container from "./Container.tsx";
import { HTMLProperties } from "../../../types/types.ts";
import { ExpandbleContainerProps } from "../types/containerTypes.ts";

export default function ExpandableContainer( props : ExpandbleContainerProps ) {
    
    const expandableRef = createRef<HTMLDivElement>()

    
    const expandContainer = (_ : SyntheticEvent) => {

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