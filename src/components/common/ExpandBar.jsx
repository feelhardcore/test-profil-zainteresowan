import Arrow, { direction } from "./Arrow";

export default function ExpandBar(props){

    return (
        <div className="expand-bar">
            <hr/>
            <Arrow fn = {props.fn} facing = {direction.bottom}></Arrow>
        </div>
    )
}