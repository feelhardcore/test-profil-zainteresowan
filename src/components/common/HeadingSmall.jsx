import Heading, { alignments, headingSizes } from "./Heading";
/**
 * 
 * Component for small headings
 * @property alignment - text alignment -- defaults to center
 * @property italic - true/false -- defaults to false
 */
export default function HeadingSmall(props){
    return (
        <Heading size = {headingSizes.small} alignments = {props.alignments} italic = {props.italic}>{props.children}</Heading>
    )
}