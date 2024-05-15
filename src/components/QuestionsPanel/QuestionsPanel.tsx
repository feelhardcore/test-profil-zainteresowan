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

    useEffect(() => {
        console.log(props.callbacks?.sum?.(69,1))
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
            {currentAnswers.map((value,index) => {
                return <Question 
                    events= {props.events}
                    next_set = {nextSet} 
                    slideInDirection = {direction} 
                    question_number = {questionSet*10+index}
                    current_answer = {value}
                />
                })
            }

        </Container>)

}