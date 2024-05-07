import { useEffect } from "react"
import TestQuestion from "../TestQuestion/TestQuestion"
import Question from "./Question"

export default function QuestionPanel(props){

    const questionSet = props.questionSet

    const direction = props.nextDirection || false

    const nextSet = props.nextSet

    const onSlideOut = props.onSlideOut 

    const answerHook = props.answerHook

    const currentAnswers = props.currentAnswers

    useEffect(() => {
        document.getElementById("questionPanel").scrollIntoView({block : "start", behavior : "smooth"})
    })


    
    return (<div className="questionpanel" id = "questionPanel" key = {questionSet}>
        
      
        <div className="current-set" >

            {currentAnswers.map((value,index) => {
                return <Question 
                    answerHook = {answerHook} 
                    nextSet = {nextSet} 
                    direction = {direction} 
                    number = {questionSet*10+index}
                    currentAnswer = {value}
                    onSlideOut = {index === 9 ? onSlideOut : () => {}}
                />
            })}


        </div>

        <div className="old-set"></div>
    </div>

    
)

}