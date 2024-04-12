export default function Circle(props){

    return (<div className="circle" onClick={props.fn} style = {{height : props.dims, width : props.dims}}>{props.children}</div>)
}