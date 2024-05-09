import { PropsWithChildren, SyntheticEvent, createRef} from "react";
import { ExpandbleContainerProps } from "../types";
import React from "react";
import ExpandBar from "../ExpandBar.tsx";
import Container from "./Container.tsx";

export default function ExpandableContainer( props : PropsWithChildren<ExpandbleContainerProps> ) {
    
    const expandableRef = createRef<HTMLDivElement>()

    
    const expandContainer = (_ : SyntheticEvent) => {

        console.error("XD")
        expandableRef.current?.classList.toggle("collapsed")
        
    }





    



    return(
            <>
            <Container {...props} react={{ref : expandableRef}}>

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