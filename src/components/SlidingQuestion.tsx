import React, { TransitionEvent, createRef, useEffect, useState } from "react";
import Question from "./QuestionsPanel/Question.tsx";
import Option from "./QuestionsPanel/Option.jsx";
import { SlidingQuestionProps } from "../react/types/types.ts";
import Container from "../react/common/components/containers/Container.tsx";
import { generateQuestionClasses, generateQuestionStyle, generateSlidingQuestionClasses } from "../react/common/scripts/propsParser.ts";
import { test_content } from "../common/data/test_content.js";

export default function SlidingQuestion(props : SlidingQuestionProps){

    const [questionState, setQuestionState] = useState(questionStates.question_slide_in)

    const [selected,setSelected] = useState(props.current_answer)

    const questionData = test_content[props.question_number]

    const divRef = createRef<HTMLDivElement>()


    useEffect(() => {
        
        if(questionState == questionStates.question_slide_in){
        }
    },[questionState])

    useEffect(() => {
        triggerSlideIn()
    },[props.question_number])

    const transtionFinished = (e :TransitionEvent) => {
        if(e.propertyName = "transform"){
            if(questionState === questionStates.question_slide_in)
                setQuestionState(questionStates.question_stay)
            else if(questionState === questionStates.question_slide_out){

                triggerNextQuestionSet()
            }
        }
    }

    const triggerNextQuestionSet = () => {
        props.events.onFinishedSlidingOut?.()
    }

    const triggerSlideIn = () => {
        divRef.current?.classList.add(props.slide_direction === "left" ? "question-from-left" : "question-from-right")
    }

    return (
        <Container
        react={{
            ref : divRef
        }}
        htmlProps={
            {
                class : [generateSlidingQuestionClasses(props,questionState)]
            }
        }
        events={{
            onClick: props.events.onClick, 
            onTransitionEnd : props.last_question ? transtionFinished : void(0)
        }}
        >
            <Option answerHook = {void(0)} selected = {selected === 0}>{questionData.option1}</Option>
            <Option answerHook = {void(0)} selected = {selected === 1}>{questionData.option2}</Option>
        
        </Container>
    )
}

const questionStates = {
    question_slide_in : 0,
    question_stay : 1,
    question_slide_out : 2
}