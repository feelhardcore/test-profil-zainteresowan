import { useEffect, useRef, useState } from "react";
import TestHeader from "../../components/test_header/TestHeader";
import TestQuestion from "../../components/TestQuestion/TestQuestion";
import './TestPage_styles.css'

export default function TestPage(props){




    const answerMatrix = useRef(
        [
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null]
        ]
    )

    const [questionNumber, setQuestionNumber] = useState(0);
    const unansweredQuestions = useRef([])
    const [matrixCoords, setMatrixCoords] = useState([0,0])
    

    const answerHook = (option) => {

        console.log("Updating matrix answers")
        console.log("Current question id:" +questionNumber)
        console.log("Coords: "+matrixCoords[0] + "/" +matrixCoords[1])
        console.log("Updated value :"+ option)
        setAnswer(option);
    }

    const checkForAnsweredQuestion = () => {
        if(getAnswer() === null){
            unansweredQuestions.current.push(questionNumber)
        }
        else unansweredQuestions.current = unansweredQuestions.current.filter(i => i !== questionNumber)
    }

    useEffect(() => { 


    },[questionNumber])

    const checkForCompletion = () => {
        if (answerMatrix.current.includes(null)) return false; return true;
    }

    const nextQuestion= () => {

        moveToQuestion(questionNumber+1)
        
    }

    const moveToQuestion = (value) => {
        checkForAnsweredQuestion()
        let matrixX = value%10
        let matrixY = (value/10) << 0
        setMatrixCoords([matrixX,matrixY])
        setQuestionNumber(value)
    }


    const previousQuestion = () => {
        moveToQuestion(questionNumber-1)
    }

    const setAnswer = (value) => {
        answerMatrix.current[matrixCoords[1]][matrixCoords[0]] = value;
    }

    const getAnswer = () => {
        return answerMatrix.current[matrixCoords[1]][matrixCoords[0]]
    }

    const showMatrix = () => {
        console.log(answerMatrix.current)
        console.log(unansweredQuestions.current)
    }



    return (
        <div className="test-main">

            <TestHeader/>

            <div className="test-question-number">Pytanie {questionNumber+1}/100</div>
            
            <TestQuestion questionNumber = {questionNumber} answerHook={answerHook} initialState = {getAnswer()}/>

            
            {questionNumber != 99 ? <button onClick={nextQuestion}> Dalej</button> : null}
            {questionNumber != 0 ? <button onClick={previousQuestion}> Poprzednia</button> : null}
            <button onClick={showMatrix}> pokaz odpo</button>

        </div>
        )
}