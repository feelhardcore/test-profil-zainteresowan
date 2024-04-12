import { useEffect, useRef, useState } from "react";
import TestHeader from "../../components/test_header/TestHeader";
import TestQuestion from "../../components/TestQuestion/TestQuestion";
import './TestPage_styles.css'
import {useNavigate} from 'react-router-dom'
import { navigateToResults } from "../../common/scripts/navigate";

export default function TestPage(_props){

    


    const c = useNavigate()


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
    const [testCompleted,setTestCompleted] = useState(false)
    const [autoAdvance,setAutoAdvance] = useState(false)
    

    const answerHook = (option) => {

        console.log("Updating matrix answers")
        console.log("Current question id:" +questionNumber)
        console.log("Coords: "+matrixCoords[0] + "/" +matrixCoords[1])
        console.log("Updated value :"+ option)
        setAnswer(option);
        checkForCompletion()
        if(autoAdvance && questionNumber != 99){
            nextQuestion()
        }
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
        let testCompleted = true;
        for(let i = 0;i<10;i++){
            if(answerMatrix.current[i].includes(null)){
                testCompleted = false
                break;
            }
        }
        setTestCompleted(testCompleted)
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

    const submit = () => {
        c('/results',{ replace : false, state : {data : {
            results : calculateResults(answerMatrix.current),
            answers : answerMatrix.current
        }}})
    }
    const submitOverride = () => {
        let array= new Array(10)
        .fill(0)
        .map(_e=>(new Array(10))
        .fill(0)
        .map(_e=> Math.random()<0.7?0:1))
        navigateToResults({ replace : false, state : {data : {
            results : calculateResults(array),
            answers : array
        }}})
    }

    const toggleAutoAdvance = () => {
        setAutoAdvance(!autoAdvance);
    }

    const calculateResults = (array) => {
        let columnResult = [0,0,0,0,0,0,0,0,0,0]
        let rowResult = [0,0,0,0,0,0,0,0,0,0]
        let totalResult = [0,0,0,0,0,0,0,0,0,0]
        for (let i = 0; i<10;i++){
            for (let j = 0;j<10;j++){
                if (array[i][j] == 0) columnResult[j]++
                else rowResult[i]++ 
            }

        }
        totalResult = totalResult.map((_e,i) => {return columnResult[i]+rowResult[i]})
        return [[...rowResult],[...columnResult],[...totalResult]];
    }

    


    return (
        <div className="test-main">

            <TestHeader/>

            <div className="test-question-number">Pytanie {questionNumber+1}/100</div>
            
            <TestQuestion questionNumber = {questionNumber} answerHook={answerHook} initialState = {getAnswer()}/>

            
            {questionNumber != 99 ? <button onClick={nextQuestion}> Dalej</button> : null}
            {questionNumber != 0 ? <button onClick={previousQuestion}> Poprzednia</button> : null}
            <button onClick={showMatrix}> pokaz odpo</button>
            <button onClick = {toggleAutoAdvance} style={{backgroundColor : autoAdvance? "lightgreen": null}}>Automatycznie przechodz do kolejnego</button>

            <button onClick = {submit} style={{display: testCompleted ? "block" : "none"}}>sprawdz</button>
            <button onClick = {submitOverride}>Przejdz do konca testu z losowymi odpowiedziami</button>

        </div>
        )
}