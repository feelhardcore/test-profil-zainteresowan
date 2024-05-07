import { useEffect, useState } from "react";
import { test_content } from "../../common/data/test_content";
import './TestQuestion_styles.css'


export default function TestQuestion(props)
{
  

    const [currentAnswer,setCurrentAnswer] = useState(props.initialState)
    const questionNumber = props.questionNumber;
    const answerHook = props.answerHook || function() {};
    const question = test_content[questionNumber]
    


    const setStyles = (index) => {
        if (index == currentAnswer) return "test-question-option selected"
        return "test-question-option"

    }

    const answerSelect = (index) => {
        answerHook(index)
        setCurrentAnswer(index);
    }


    const getQuestionAnswer = (index) => {
        return index == 0 ? question.option1 : question.option2
    }

    useEffect(() => {
        setCurrentAnswer(props.initialState)
    },[props.questionNumber])


    return (
        <div className="test-question">
            <div className= {setStyles(0)} onClick={() => answerSelect(0)}>
                {getQuestionAnswer(0)}
            </div>
            <div className= {setStyles(1)} onClick={() => answerSelect(1)}>
                {getQuestionAnswer(1)}
            </div>
        </div>
    )

}