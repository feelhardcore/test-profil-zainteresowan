export function buttonProps(text : string,fn : Function,isToggle : boolean = false,color: string |null = null, txtColor : string | null = null){
    return {
        text,
        fn : () => fn(),
        isToggle,
        color,
        txtColor
    } 
}