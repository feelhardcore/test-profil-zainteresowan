import React, { useEffect, useMemo, useState } from "react";
import { SingleChoiceQuestionProps } from "../../../../types/types.ts";
import Container from "../../containers/Container.tsx";
import { generateSingleChoiceQuestionClasses } from "../../../scripts/propsParser.ts";
import Option from "./components/Option.tsx";
export default function SingleChoiceQuestion(props : SingleChoiceQuestionProps){

    const options = useMemo(() => Object.keys(props.options)
                    .filter(key => key.includes("option"))
                    .sort()
                    .map(key => {return props.options[key]}),[props.options])

    const [selectedAnswer,setSelectedAnswer] = useState(props.current_answer ? 
        props.current_answer : props.default ? props.default : undefined)

    const questionNumber = props.questionNumber

    const selectAnswer = (option) => {
        setSelectedAnswer(option)
        if(error){
            setError(false)
        }
        console.log(`Question : ${questionNumber}, answer : ${option}`)
        props.events.onAnswerSelect.handler(questionNumber,option)

    }

    const [error,setError] = useState(props.error?.isError)

    useEffect(() => {
        setSelectedAnswer(props.current_answer)
    },[questionNumber])

    useEffect(() => {
        setError(props.error?.isError)
    },[props.error])


    return <Container react={{
    }}
    htmlProps={
        {
            class : [generateSingleChoiceQuestionClasses(error)]
        }
    }
    
    >
        {options.map((option,index) => {
            return <Option isSelected = {selectedAnswer === index} events={{
                onSelected : () => selectAnswer(index) } }>{option}</Option>
        })}
        <Container>Pytanie {props.questionNumber+1}/{props.questionCount}</Container>
        {error && <Container>
            {props.error?.errors.map(value => {
                return<p className="error-msg">{value}</p>
            })}
            </Container>}
    </Container>
}