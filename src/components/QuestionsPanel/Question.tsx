import { SyntheticEvent, TransitionEvent, TransitionEventHandler, createRef, useEffect, useState } from "react"
import { test_content } from "../../common/data/test_content"
import { useRef } from "react"
import Option from "./Option"
import { QuestionProps } from "../common/types.ts"
import Container from "../common/containers/Container.tsx"
import React from "react"

export default function Question(props : QuestionProps){
    const number = props.question_number
    const questionData = test_content[number]

    const nextSet = props.next_set

    const currentAnswer = props.current_answer

    const direction = props.slideInDirection
    const divRef = createRef<HTMLDivElement>()

    const [selected,setSelected] = useState(currentAnswer)

    const answerHook = props.events.onClick

    const onSlideOut = props.events.onSlideOut
    

    const animationDelay = () =>{
        let delay = 0.05 * (number % 10)
        return delay+"s"
    }

    const onTransitionEnd = (e : TransitionEvent) => {
        if(nextSet){
            if(number %10 === 9 && e.propertyName === "transform") {
                onSlideOut?.()
            }
        }

        

        
    }

    const selectAnswer = (option) => {

        setSelected(option)
        answerHook(number,option)
    }


    useEffect(() => {
        if(nextSet == true){
            divRef.current?.classList.toggle("slide-in", false)
            divRef.current?.classList.toggle(
                direction === "left" ? "slide-out-left" : "slide-out-right", true
            )
        }
        else setTimeout(triggerSlideIn,50)

    },[nextSet])

    const className = () => {
        let classes = ["question"]
        if(!nextSet){
            if(direction === "left") classes.push("question-from-left")
            else classes.push("question-from-right")
        }
        
        return classes.join(" ")
    }

    const style = () => { return {transitionProperty: "all", transitionDuration: "0.5s", transitionTimingFunction: "ease", transitionDelay: animationDelay()}
    }


    const triggerSlideIn = () => {
        divRef.current?.classList.toggle("slide-in", true)
    }
    

    return(
        <Container react={{
            ref : divRef,
        }}
        htmlProps={
            {
                class : ["question", "question-from-left"]
            }
        }
        events={{
            onTransitionEnd : onTransitionEnd
        }}
        >
            <Option answerHook = {() => selectAnswer(0)} selected = {selected === 0}>{questionData.option1}</Option>
            <Option answerHook = {() => selectAnswer(1)} selected = {selected === 1}>{questionData.option2}</Option>
        </Container>
    )
}