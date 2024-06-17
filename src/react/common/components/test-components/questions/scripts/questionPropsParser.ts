import { SingleChoiceQuestionProps } from "../../../types/questionTypes"


export function generateSingleChoiceQuestionClasses(props : SingleChoiceQuestionProps) {
    let classes = ["question"]
    return classes.join(" ")
}