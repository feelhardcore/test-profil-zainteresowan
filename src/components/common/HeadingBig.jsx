import Heading, { alignments, headingSizes } from "./Heading";
/**
 * 
 * @summary Component for big headings
 * @property alignment - text alignment - defaults to center
 * @property italic - true/false -- defaults to false
 */
export default function HeadingBig(props){
    return (
        <Heading size = {headingSizes.big} alignments = {props.alignments} italic = {props.italic}>{props.children}</Heading>
    )
}