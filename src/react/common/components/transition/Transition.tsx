import { ReactNode, TransitionEvent, TransitionEventHandler, createRef, useEffect, useRef, useState } from "react";
import React from "react";
import { TransitionProps } from "../types/transitionTypes";

export default function Transition(props : TransitionProps){

    const divRef = createRef<HTMLDivElement>()

    const [transitionState,setTransitionState] = useState(0)

    const [element, setElement] = useState<ReactNode>()

    const transitionType = props.type
    const transitionSpeed = props.base_speed
    const transitionDelay = props.delay
    const [nextPageDirection,setNextPageDirection] = useState(props.next_page_direction)


    const onTransitionEnd = (e : TransitionEvent) => {
        if(divRef.current)
            divRef.current.className = ""
        if(props.triggerOut && divRef.current){
            divRef.current.className = "transition force-no-transition"
            switch(transitionType){
                case "slide-in-out":
                case "show-and-hide":
                case "both":
                    divRef.current.classList.add(props.next_page_direction === "forwards" ? "both-slide-in-out-start-left" : "both-slide-in-out-start-right")
                }
            
        }

        props.events?.onTransitionedOut?.(e)
    }


    useEffect(() => {
        if(!props.update_static)
        setTimeout(triggerTransition,50)
        
    },[props.children])

    useEffect(() => {
        if(props.triggerOut){

            divRef.current?.classList.add("transition")
            switch(transitionType){
                case "both":
                    console.warn(props.next_page_direction)
                    divRef.current?.classList.add(props.next_page_direction === "forwards" ? "both-slide-out-to-right" : "both-slide-out-to-left")  
            }
            
        }
        
    },[props.triggerOut])

    const baseClass = () => {
        if(props.update_static) return ""
        let classes = ["transition"]
        switch (transitionType)
        {
            case "both" :
                classes.push(props.next_page_direction === "forwards" ?  "both-slide-in-out-start-left" : "both-slide-in-out-start-right")
        }
        return classes.join(" ")
    }

    const triggerTransition = () => {
        divRef.current?.classList.add("transition")
        divRef.current?.classList.remove("force-no-transition")

        switch (transitionType){
            case "slide-in-out":

            case "show-and-hide":
            case "both":
                divRef.current?.classList.add("both-slide-in-element")
        }
    }

    

    return <div 
            ref = {divRef} 
            className= {baseClass()}  
            style={{
                transitionDelay : transitionDelay+"ms",
                transitionDuration : transitionSpeed+"ms"
            }}
            onTransitionEnd={ e =>onTransitionEnd(e)}>
        {props.children}
    </div>
}