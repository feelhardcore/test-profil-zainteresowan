import React ,{ ReactNode, TransitionEvent, useEffect, useRef, useState } from "react";
import { NextPageDirection, TransitionGroupProps } from "../react/types/types.ts";
import Transition from "./Transition.tsx";
import TransitionNew from "./common/TransitionNew.tsx";
import Container from "../react/common/components/containers/Container.tsx";

export default function TransitionGroup(props : TransitionGroupProps){

    const transitionType = props.type
    const transitionSpeed = props.base_speed
    const transitionDelay = props.delay
    const nextPageDirection = useState<NextPageDirection | undefined>(props.next_page_direction || "forwards") 

    const [children,setChildren] = useState<ReactNode[]>()


    const [transtionState, setTransitionState] = useState(TRANSITION_STAGES.IN_STAGE)


    const [triggerOut, setTriggerOut] = useState(false)

    // handle changes in transtionState
    useEffect(() => {
        console.log("im triggered because transtionState changed")
        switch(transtionState){
            case TRANSITION_STAGES.IN_STAGE:
                console.log("Transtion is in stage 0 : in stage")
                handleInStage()
                break;
            case TRANSITION_STAGES.NORMAL_STAGE:
                console.log("Transition in state 1 : normal state, handled internally by element")
                break;
            case TRANSITION_STAGES.OUT_STAGE:
                console.log("Elements are transitioning out, handled internally, waiting for completion")
                break;

        }
    },[transtionState])

    //handle new children
    useEffect(() => {

        console.log("new children")
        console.log(props.items)
        if(props.update_errors){
            //static update
            setChildren(props.items)
        }
        else{
            if(transtionState !== TRANSITION_STAGES.NORMAL_STAGE) return
            console.log("New children arrived, trigger out ")
            setTriggerOut(true)
            setTransitionState(TRANSITION_STAGES.OUT_STAGE)
            console.warn(props.next_page_direction)
            nextPageDirection[1](props.next_page_direction)
        }
        

    },[props.items])


    const onTransitionEnd = (e : TransitionEvent) => {
        switch(transtionState){
            case TRANSITION_STAGES.IN_STAGE:
                console.log("element transitioned in, set normal state")
                setTransitionState(TRANSITION_STAGES.NORMAL_STAGE)
                break;
            case TRANSITION_STAGES.OUT_STAGE:
                console.log("last element transitioned out, set 0 state again")
                setTriggerOut(false)
                setTransitionState(TRANSITION_STAGES.IN_STAGE)
    
        }
    }

    useEffect(() => {
        console.log("update errors : %s" , props.update_errors)
        if(props.update_errors)
            {
                
                setChildren(props.items)
                
            }
        

    },[props.update_errors])

    // handle in stage of transition
    const handleInStage = () => {
        /*
            set new children array
            
         */
            console.log("Handling state 0 of transtion")
            setChildren(props.items)
    }


    return(
        <Container {...props.outerContainerProps}>
            {children?.map((value,index) => {
                let shouldAppendTranstionHandler = index === children.length-1
                return(
                    <TransitionNew
                        update_static = {props.update_errors}
                        key = {index}
                        triggerOut = {triggerOut}
                        type = {transitionType}
                        events={{
                            onTransitionedOut : shouldAppendTranstionHandler ? onTransitionEnd : undefined
                        }
                        }
                        base_speed={transitionSpeed}
                        delay={transitionDelay? transitionDelay*index : undefined}
                        next_page_direction={nextPageDirection[0]}
                    >
                        {value}
                    </TransitionNew>
                )
            })}
        </Container>
        
    )

}

const TRANSITION_STAGES = {
    IN_STAGE : 0,
    NORMAL_STAGE : 1,
    OUT_STAGE : 2,
    COMPLETED : 3
}
