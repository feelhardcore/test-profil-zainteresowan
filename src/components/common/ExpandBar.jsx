import Arrow  from "./Arrow.tsx";

export default function ExpandBar(props){

    return (
        <div className="expand-bar" style={{margin : "20px 0"}}>
            <hr/>
            <Arrow 
                lockFacing = {false}
                facingDirection={2}
            
            ></Arrow>

        </div>
    )
}