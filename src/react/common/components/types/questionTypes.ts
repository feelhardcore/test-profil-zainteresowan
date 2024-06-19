import { VoidCallback, Error, Children } from "../../../types/types.ts"

export interface SingleChoiceQuestionProps{
    questionNumber : number,
    questionCount : number
    default? : number
    options: {
        [key : string] : string
    }
    current_answer? : number
    error? : Error
    events : {
        onAnswerSelect : {
            handler : VoidCallback
        }
    }

}

export interface OptionProps extends Children{
    isSelected : boolean,
    events: {
        onSelected : VoidCallback
    }
}