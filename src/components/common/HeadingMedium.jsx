import Heading, { alignments, headingSizes } from "./Heading";
/**
 * 
 * @summary Component for big headings
 * @property alignment - text alignment -- defaults to center
 * @property italic - true/false -- defaults to false
 */
export default function HeadingMedium(props){
    return (
        <Heading size = {headingSizes.medium} alignments = {props.alignments} italic = {props.italic}>{props.children}</Heading>
    )
}