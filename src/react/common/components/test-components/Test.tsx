import React, {ReactNode, SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import Container from "../containers/Container.tsx";
import HeadingMedium from '../heading/HeadingMedium.tsx'
import {popup} from "../../../../App.js"
import { popup_types } from "../../../../common/data/popup_types.js";
import SingleChoiceQuestion from "./questions/SingleChoiceQuestion.tsx";
import { NextPageDirection, Error} from "../../../types/types.ts";
import { TestProps, Question, PagingOptions, TestData } from "../types/testTypes.ts";
import TestNavBar from "./test-nav/TestNavBar.tsx";
import TransitionGroup from "../transition/TransitionGroup.tsx";
import HeadingSmall from "../heading/HeadingSmall.tsx";

export default function Test(props : TestProps){

    const testData = props.data
    const defaultQuestionType = testData.question_type_default
    const testMode = testData.test_mode
    const questionData = testData.data

    const questionCount = questionData.questions.length

    const errorRef = useRef<(Error)[]>(Array(questionCount).fill({
        isError: false,
        errors : []
    }))

    const transitionInProgress = useRef(false)
    const handleKeyUp = (e : KeyboardEvent) => {
        if(e.key == "ArrowRight"){
            nextPage()
        }
        else if( e.key == "ArrowLeft"){
            prevPage()
        }
        else if(e.key == "Enter") {
            handleSubmit(null!)
        }

    }
    

    const isDesktop = useMemo(() => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
            return false
          }else{
            // false for not mobile device
            return true
          }
          
    },[])
    
    
    const [page,setPage] = useState(0)

    const [error,setError] = useState(false)

    const [pageCompleted,setPageCompleted] = useState(true)

    const currentQuestions = useRef<React.JSX.Element[]>()

    const [testCompleted,setTestCompleted] = useState(false)

    const currentAnswers = useRef(Array(questionData.questions?.length).fill(null))

    const [nextPageDirection,setNextPageDirection] = useState<NextPageDirection>("forwards")

    const generateSingleQuestionsPage = (questions : Question[]) => {

        let startingQuestionNumber = paging[page][0]

        console.warn("I RERENDER")
        console.warn("Error state: %s", error)
        console.warn("Page completed state: %s" , pageCompleted)
        if(error){setError(false)}

        console.log(errorRef.current)
        

        let questionNodes = questions.map((value,index) => {
    
            return <SingleChoiceQuestion 
                key={index}
                default={value.default as number}
                options={value.options}
                questionCount={questionCount}
                questionNumber={startingQuestionNumber+index}
                current_answer={currentAnswers.current[startingQuestionNumber+index]}
                error={errorRef.current?.[index+startingQuestionNumber]}
                events={{
                    onAnswerSelect : {
                        handler : answerSelected
                    }
                }}
            />
        })

        currentQuestions.current = questionNodes

        
        if(transitions?.type){
            return <TransitionGroup
                items={questionNodes}
                type = {transitions.type}
                base_speed={transitions.speed}
                delay={transitions.delay_each}
                next_page_direction= {nextPageDirection}
                update_errors = {!pageCompleted}
                transitionRef={transitionInProgress}
            >
    
            </TransitionGroup>
        }
        else{
            return <Container>
                {questionNodes}
            </Container>
        }
    }

    // done
    const paging = useMemo(() => generatePagesBounds(questionData.questions.length, props.paging),[props.paging])


    const answerSelected = (questionNumber : number, answer: number | string) => {
        currentAnswers.current[questionNumber] = answer
        errorRef.current[questionNumber] = {isError: false, errors : []}
        checkForCompletion()
    }


    const generateTestPage = () => {
        let currentPageBounds = paging[page];
        let lowerBound = currentPageBounds[0]
        let upperBound = currentPageBounds[1]+1
        let currentPageQuestions = testData.data.questions.slice(lowerBound,upperBound)
        if(testData.test_mode === "single_question"){
            return generateSingleQuestionsPage(currentPageQuestions)
        }

    return <Container>
    </Container>
    }

    const nextPage = () => {
        if(!isPageCompleted()) return
        if(page >= paging.length) return;
        setPage(page+1)
        setNextPageDirection("forwards")
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }

    const prevPage =  () => {
        if(page == 0) return;
        setPage(page-1)
        setNextPageDirection("backwards")
        setPageCompleted(true)
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }

    const checkForCompletion = () => {
        if(currentAnswers.current.find(e => e == null) === undefined){
            setTestCompleted(true)
            setPageCompleted(false) // lol
        }
    }

    const isPageCompleted = () => {

        if(transitionInProgress.current) return
        let currentPageBounds = paging[page];
        let lowerBound = currentPageBounds[0]
        let upperBound = currentPageBounds[1]+1
        let completed = true
        for(let i = lowerBound; i<upperBound;i++){
            console.log("Im on index %s", i)
            if(currentAnswers.current[i] === null){
                if(testData.data.questions[i].optional) continue;
                completed = false
                console.log(errorRef.current![i])
                let error : Error = {
                    isError : true,
                    errors : ["Proszę zaznaczyć jedną z podanych odpowiedzi"]

                }
                errorRef.current[i] = error
            }
            else {
                let error : Error = {
                    isError : false,
                    errors : []
                }
                errorRef.current[i] = error
            }  
        }
        console.log(errorRef.current)
        setError(!completed)
        setPageCompleted(completed)
        return completed;
    }

    const handleSubmit =  (e : SyntheticEvent) => {
        console.log("?")
        if(!testCompleted)
            popup.show(popup_types.warn, "Proszę zaznaczyć odpowiedzi na wszystkie pytania", 4)
        else {
            console.log("!")
            props.events.submitEventHandler(currentAnswers.current)
        }
    }


    const transitions = props.page_transition

    useEffect(() => {

        window.addEventListener("keyup",handleKeyUp)
        return () => {
            window.removeEventListener("keyup",handleKeyUp)
        }
    }
,[page])
    return(
        <Container>
            <HeadingMedium>{props.name}</HeadingMedium>
            {props.data.test_mode === "single_question" ? <HeadingMedium>
                Który zawód z podanych podoba ci się bardziej?
            </HeadingMedium> : null}
            <HeadingSmall>Strona {page+1}/{paging.length}</HeadingSmall>
            {isDesktop && <HeadingSmall>(możesz używać strzałek na klawiaturze do przechodzenia między stronami)</HeadingSmall>}
            <Container>
                {generateTestPage()}
                <TestNavBar
                    buttons_events={{
                        left_button : (_) => {prevPage()},
                        right_button : (_) => {nextPage()},
                        submit_button : handleSubmit
                    }
                }
                buttons_enabled={{
                    left_button : page > 0,
                    right_button: page < paging.length,
                    submit_button : testCompleted
                }}
                />
            </Container>
        </Container>
    )
}







function generatePagesBounds(questionsCount : number, pagingOptions? : PagingOptions,) : [number,number][]{

    console.log("Generating page bounds")
    console.log(`Questions : ${questionsCount}`)
    if(!pagingOptions){
        console.log("Paging options not set, defaulting to 10 per page")
        return divideIntoPages(10,questionsCount)
    }
    let currentQuestion = 0
    let pageBounds = []

    if(pagingOptions.custom_per_page) return divideIntoPages(pagingOptions.custom_per_page,questionsCount)
    if(pagingOptions.static_per_page) return divideIntoPages(pagingOptions.static_per_page,questionsCount)
    if(pagingOptions.all_in_one) return [[0,questionsCount-1]]
    if(pagingOptions.one_by_one) return divideIntoPages(1,questionsCount)

    console.log("Paging options were set, but all values were undefined, defaulting to 10 per page")

    return divideIntoPages(10,questionsCount)

}
function divideIntoPages(perPage : number | number[], questionCount : number){

    let boundsArray : [number,number][] = []
    let staticPageBounds = typeof perPage === "number"
    let i = 0
    let j = 0;
    let currentPageQuestionsCount = staticPageBounds ? perPage as number: null;
    while(i < questionCount){
        if(!staticPageBounds && j < (perPage as number[]).length){
            currentPageQuestionsCount = perPage[j++]
        }

        let lowerBound = i
        let upperBound = i+ (currentPageQuestionsCount as number) - 1
        if(upperBound >= questionCount){
            upperBound = questionCount-1
        }
        boundsArray.push([lowerBound,upperBound])
        i += currentPageQuestionsCount as number
    }
    return boundsArray
}


function generatePage(questions : Question[], pages : [number,number][],page: number, test_data : TestData) : ReactNode{

    let currentPageBounds = pages[page];
    let lowerBound = currentPageBounds[0]
    let upperBound = currentPageBounds[1]+1
    let currentPageQuestions = questions.slice(lowerBound,upperBound)

    console.log(pages)
    return(
        <Container>
            {test_data.question_type_default}
            {currentPageQuestions.map((value,index) => {
                let keys = Object.keys(value.options)
                .filter( key => key.includes("option"))
                .sort()
                return(<>
                    <div>Pytanie {index+lowerBound+1}</div>
                    <div>Options defined</div>
                    {keys.map((key) => {
                        return (
                            <div>
                                <div>Property name : {key}</div>
                                <div>Property value : {value.options[key] as string}</div>
                            </div>
                        )
                    })}
                </>)
            })}
        </Container>
    )
}