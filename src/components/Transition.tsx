import { ReactNode, TransitionEvent, createRef, useEffect, useRef, useState } from "react";
import { TransitionProps } from "./common/types.ts";
import React from "react";

export default function Transition(props : TransitionProps){

    const divRef = createRef<HTMLDivElement>()

    const [transitionState,setTransitionState] = useState(0)

    const [element, setElement] = useState<ReactNode>()

    const transitionType = props.type
    const transitionSpeed = props.base_speed
    const transitionDelay = props.delay
    const direction_in = props.direction_in
    const direction_out = props.direction_out


    useEffect(() => {

        if(transitionState === 0){
            console.log("Children change while state 0, setState of element to render")
            setElement(props.children)
        }
        else if(transitionState === 1){
            console.log("Element change on state 1, trigger old element out")
            triggerSlideOut(divRef.current!)
        }
        
    },[props.children])
    const triggerSlideIn = (element : HTMLDivElement) => {
        if(transitionType == "both"){
            if(element){
                element.style.transitionDuration = transitionSpeed+"ms"
                element.style.transitionDelay = transitionDelay+"ms"
            }
            element?.classList.add("transition")
            element?.classList.remove(...["slide-out-to-right", "slide-out-to-left"])
            element?.classList.add("slide-in-element")
        }
        
    }

    const triggerSlideOut = (element : HTMLDivElement) => {
        setTransitionState(2)
        if(transitionType == "both"){
            element?.classList.add(direction_in === "left" ? "slide-out-to-right" : "slide-out-to-left")
        }
    }

    const onTransitionEnd = (e : TransitionEvent) => {
        if(transitionState === 0){
            e.currentTarget.classList.remove(...["slide-in-out-start-left", "slide-in-out-start-right"])
            setTransitionState(1)
        }
        else if(transitionState === 2){
            setTransitionState(0)
            setElement(props.children)
        }
    }
    useEffect(() => {
        console.log("element has been changed, trigger its in transition")
        divRef.current?.classList.remove(...["slide-in-element"])
        if(divRef.current)
            divRef.current.style.transition = ""
        divRef.current?.classList.remove(...["slide-out-to-right", "transition"])
        divRef.current?.classList.add(direction_in === "left" ? "slide-in-out-start-left" : "slide-in-out-start-right")
            setTimeout(() => triggerSlideIn(divRef.current!),50)

    },[element])

    const baseClasses = () => {
        let classes = ["transition"]
        if(transitionType === "both"){
            classes.push(direction_in  === "left" ? "slide-in-out-start-left" : "slide-in-out-start-right")
        }
        return classes.join(" ")
    }


    return <div ref = {divRef} className= {baseClasses()}  onTransitionEnd={ e =>onTransitionEnd(e)}>
        {element}
    </div>
}