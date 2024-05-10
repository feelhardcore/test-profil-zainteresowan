import { useEffect, useRef, useState } from "react";
import HeadingSmall from "../common/HeadingSmall";
import { lorem } from "../../common/data/test_content";
import './index.css'
import Arrow, { direction } from "../common/Arrow";
import ExpandBar from "../common/ExpandBar";

export default function CategoryDescription(props){

    const expandRef = useRef()
    const [expand,setExpand] = useState(false)
    const data = props.data
    data.heading = "Some weird category name"

    const showMore =  () => {
        setExpand(!expand)
        console.log(expandRef.current.parentNode.parentNode)
        expandRef.current.parentNode.parentNode.scrollIntoView({behavior : "smooth", block : "start"})

        
    }

    const onEnd = e => {
    }


    return(
        <div className="category-desc">
            <HeadingSmall>{data.heading}</HeadingSmall>
            <div id = "category-desc-content" >
                <div className="category-desc-content-static"></div>
                <div id="category-desc-content-expandable"  ref = {expandRef} onTransitionEnd={(e)=> onEnd(e)} className={expand ? "expanded" : "collapsed"}>
                {data.content.map(value => {
                    return (<p className="category-desc-content-p">{value}</p>)
                })}
                </div>
                
            </div>
            <ExpandBar fn = {() => showMore()} facing = {direction.bottom}/>
        </div>
    ) 
}