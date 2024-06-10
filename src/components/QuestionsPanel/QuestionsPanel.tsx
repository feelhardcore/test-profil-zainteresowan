import { useEffect } from "react"
import TestQuestion from "../TestQuestion/TestQuestion"
import Question from "./Question.tsx"
import { QuestionPanelProps } from "../common/types.ts"
import React from "react"
import Container from "../common/containers/Container.tsx"

export default function QuestionPanel(props : QuestionPanelProps){

    const questionSet = props.question_set

    const direction = props.next_direction || "right"

    const nextSet = props.question_set_next

    const onSlideOut = props.events.onSlideOut

    const answerHook = props.events.onClick

    const currentAnswers = props.current_answers

    const missing_answers = props.missing_answers


    useEffect(() => {
         document.getElementById("root")?.scrollIntoView({block : "start", behavior : "smooth"})
         console.log(props.current_answers)
    })

    return (
        <Container 
            htmlProps={{
                class : ["questionpanel"],
                id : "questionPanel"
            }}
            react={{
                key : questionSet
            }}

        >
            {props.current_answers.map((value,index) => {
                return <Question
                    lock_slide = {props.lock_slide}
                    events= {props.events}
                    next_set = {nextSet} 
                    slideInDirection = {direction} 
                    question_number = {questionSet*10+index}
                    current_answer = {value}
                    missing_answer = {missing_answers?.[index]}
                />
                })
            }

        </Container>)

}