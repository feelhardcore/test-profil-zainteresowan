import { useEffect, useState } from "react"
import { test_content } from "../../common/data/test_content"
import { useRef } from "react"
import Option from "./Option"
import { generateQuestionClasses } from "../common/propParser.ts"

export default function Question(props){
    const number = props.number
    const questionData = test_content[number]

    const nextSet = props.nextSet

    const currentAnswer = props.currentAnswer

    const direction = props.direction || false
    const divRef = useRef()

    const [selected,setSelected] = useState(currentAnswer)

    const answerHook = props.answerHook
    

    const animationDelay = () =>{
        let delay = 0.05 * (number % 10)
        return delay+"s"
    }

    const onTransitionEnd = e => {
        console.log(e)
        if(nextSet){
            if(number %10 === 9 && e.propertyName === "transform") {
                props.onSlideOut()
            }
        }

        

        
    }

    const selectAnswer = (option) => {

        setSelected(option)
        answerHook(number,option)
    }


    useEffect(() => {
        if(nextSet == true){
            divRef.current.classList.toggle("slide-in", false)
            divRef.current.classList.toggle(
                direction ? "slide-out-left" : "slide-out-right", true
            )
        }
        else setTimeout(triggerSlideIn,50)

    },[nextSet])

    const className = () => {
        let classes = ["question"]
        if(!nextSet){
            if(!direction) classes.push("question-from-left")
            else classes.push("question-from-right")
        }
        
        return classes.join(" ")
    }

    const style = () => { return {transitionProperty: "all", transitionDuration: "0.5s", transitionTimingFunction: "ease", transitionDelay: animationDelay()}
    }


    const triggerSlideIn = () => {
        divRef.current.classList.toggle("slide-in", true)
    }
    

    return <div ref = {divRef} onTransitionEnd={e => onTransitionEnd(e)}   className={className()} style = {style()}>
        <Option answerHook = {() => selectAnswer(0)} selected = {selected === 0}>{questionData.option1}</Option>
        <Option answerHook = {() => selectAnswer(1)} selected = {selected === 1}>{questionData.option2}</Option>
    </div>
}