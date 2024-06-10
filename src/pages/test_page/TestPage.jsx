import { useEffect, useRef, useState } from "react";
import TestHeader from "../../components/test_header/TestHeader";
import TestQuestion from "../../components/TestQuestion/TestQuestion";
import './TestPage_styles.css'
import {useNavigate} from 'react-router-dom'
import { navigateToResults } from "../../common/scripts/navigate";
import QuestionPanel from "../../components/QuestionsPanel/QuestionsPanel.tsx";
import Arrow, { direction } from "../../components/common/Arrow";
import ButtonRoundGreen from "../../components/common/buttons/button_round_green/ButtonRoundGreen.tsx";
import Border from "../../components/common/Border.tsx";
import TestNavBar from "../../components/common/TestNavBar.tsx";
import { popup } from "../../App.js";
import { popup_types } from "../../common/data/popup_types.js";

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
    const [set,setSet] = useState(0)
    const [nextSet, setNextSet] = useState(false)
    const [nextPage,setNextPage] = useState(0)
    const [nextDirection, setNextDirection] = useState(false)

    const [missingAnswers,setMissing] =  useState(Array(10).fill(false))
    const [lockSlide, setLockSlide] = useState(false)


    

    const answerHook = (questionNumber,option) => {
        answerMatrix.current[set][questionNumber%10] = option

    }

    const markUnansweredQuestions = () => {
        let current_answers = answerMatrix.current[set]
        let missing_set = Array(10).fill(false)
        let missingFound = false;
        for(let i = 0; i< current_answers.length; i++){
            if(current_answers[i] === null){
                missing_set[i] = true
                missingFound = true;
            }
            
        }
        setLockSlide(missingFound)
        setMissing(missing_set)
            
        return missingFound;
    }

    const warnUnansweredQuestions = () => {
        popup.show(popup_types.warn,"Proszę zaznaczyć odpowiedź w każdym pytaniu", 2)
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


    const getAnswer = () => {
        return answerMatrix.current[matrixCoords[1]][matrixCoords[0]]
    }

    const showMatrix = () => {
        console.log(answerMatrix.current)
        console.log(unansweredQuestions.current)
    }

    const submit = () => {
        submitOverride();return
        c('/results',{ replace : false, state : {
            results : calculateResults(answerMatrix.current)
        }})
    }
    const submitOverride = () => {
        let array= new Array(100)
        .fill(0)
        .map(_e=> Math.random()<0.7?0:1)
        navigateToResults({ replace : false, state : {
            results : array
        }})
    }

    const toggleAutoAdvance = () => {
        slideOutQuestions()
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


    const slideOutQuestions = () => {

        setNextSet(true)
    }

    const onSlideOut = () => {
        console.log("finish sliding off")
        if(nextSet) setSet(nextPage)
        setNextSet(false)
    }




    const setAnswer = (questionNumber, value) => {
        let matrixX = questionNumber / 10 
        let matrixY = questionNumber % 10
        answerMatrix.current[matrixX][matrixY] = value
    }

    const moveToNextPage = () => {
        console.log("nextpagetrigger")
        if(markUnansweredQuestions()){
            warnUnansweredQuestions()
            return
        }
        setNextPage(set => set+1)
        setNextDirection("right")
        slideOutQuestions()
    }
    const moveToPrevPage = () => {
        setNextPage(set => set-1)
        setNextDirection("left")
        slideOutQuestions()
    }


    const getCurrentAnswersForSet = () => {
        console.log(answerMatrix.current[set])
        return answerMatrix.current[set]
    }
    


    return (
        <div className="test-main">

            <TestHeader/>
            <QuestionPanel
                lock_slide = {lockSlide}
                question_set={set}
                events={{
                    onSlideOut : onSlideOut,
                    onClick : answerHook
                }}
                question_set_next = {nextSet}
                next_direction= {nextDirection}
                missing_answers={missingAnswers}
                current_answers={getCurrentAnswersForSet()}
            />
            <TestNavBar buttons_events={{
                left_button : moveToPrevPage,
                right_button : moveToNextPage,
                submit_button : submit
            }}
            buttons_enabled={{
                left_button : set !== 0,
                right_button : set !== 9,
                submit_button : testCompleted
            }}
            
                
            ></TestNavBar>
            <div style = {{display : "inline-block", width: "100%", userSelect : "none"}}>
        
                <div style={{width : "50%", float : "left"}}><Arrow fn = {moveToPrevPage} lockFacing = {true} facing = {direction.left}/></div>
                <div style={{width : "50%", float : "right"}}><Arrow fn = {moveToNextPage} lockFacing = {true} facing = {direction.right}/></div>
            </div>
            <ButtonRoundGreen 
                events={{
                    onClick : submit
                }}
            >text</ButtonRoundGreen>
            </div>
        )
}