import { backgrounds, colors } from "../../common/data/colors"

export default function Circle(props){

    const fn = props.fn || function () {}
    const color = props.color || null

    const className = () => {
        let classes = ["circle"]
        if (color !== null )classes.push(color)
        return classes.join(" ")
    }


    return (<div className={className()} onClick={props.fn} style = {{height : props.dims, width : props.dims}}>{props.children}</div>)
}