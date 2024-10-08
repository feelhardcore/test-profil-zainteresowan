import React from "react";
import Arrow  from "../../arrow/Arrow.tsx";
import { ExpandBarProps } from "../../types/expandBarTypes.ts";

export default function ExpandBar(props : ExpandBarProps){

    return (
        <div className="expand-bar" style={{margin : "20px 0"}}>
            <hr/>
            <Arrow 
                {...props.arrowProps}
                events={{
                    onClick : props.events?.onClick
                }}
            ></Arrow>

        </div>
    )
}