import { backgrounds } from "../../common/data/colors";
import Circle from "../common/Circle.jsx";

export default function Option(props)
{

    const selected = props.selected || false

    const hook = props.answerHook
    return (
        <p onClick={() => hook()}>
            <Circle color = {selected ? backgrounds.red : backgrounds.light_gray} dims = {20}></Circle>
            {props.children}
        </p>
    )
    
}