
import { colors } from "../../../common/data/colors";
import Button from "./button/Button";

export default function RedRoundButton(props){
    
    const propsModified = {...props}
    propsModified.color = colors.red
    propsModified.txtColor = colors.white

    return(<Button {...propsModified}  />)
}