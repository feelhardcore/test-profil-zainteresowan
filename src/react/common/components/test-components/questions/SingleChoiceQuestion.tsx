import React, { useEffect, useMemo, useState } from "react";
import { SingleChoiceQuestionProps } from "../../../../types/types.ts";
import Container from "../../containers/Container.tsx";
import { generateSingleChoiceQuestionClasses } from "../../../scripts/propsParser.ts";
import Option from "../../../../../components/QuestionsPanel/Option.jsx";
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
        console.log(`Question : ${questionNumber}, answer : ${option}`)
        props.events.onAnswerSelect.handler(questionNumber,option)

    }

    useEffect(() => {
        setSelectedAnswer(props.current_answer)
    },[questionNumber])




    return <Container react={{
    }}
    htmlProps={
        {
            class : [generateSingleChoiceQuestionClasses(props)]
        }
    }
    
    >
        {options.map((option,index) => {
            return <Option answerHook = {() => selectAnswer(index)} selected = {selectedAnswer === index}>{option}</Option>
        })}
        <Container>Pytanie {props.questionNumber+1}/{props.questionCount}</Container>
        {props.error?.isError && <Container>
            {props.error.errors.map(value => {
                return<p>{value}</p>
            })}
            </Container>}
    </Container>
}