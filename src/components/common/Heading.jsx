export default function Heading(props){

    const size = props.size
    const alignment = props.alignment || alignments.center;
    const italic = props.italic || false

    const className = () => {
        let classes = ["heading"]
        switch (size){
            case headingSizes.small:
                classes.push("heading-small")
                break;
            case headingSizes.medium:
                classes.push("heading-medium")
                break;
            case headingSizes.big:
                classes.push("heading-big")
                break;    
        }
        switch (alignment) {
            case alignments.left:
                classes.push("text-left")
                break;
            case alignments.center:
                classes.push("text-center")
                break;
            case alignments.right:
                classes.push("text-right")
                break;

        }
        if(italic) classes.push("italic")
        return classes.join(" ")
    }

    return (
        <div className={className()}>{props.children}</div>
    )

}

export const alignments =  {
    left : 0,
    center : 1,
    right : 2,
}
export const headingSizes = {
    small : 0,
    medium : 1,
    big : 2,
}