import './CoolButton.css'
import { colors } from '../../../../common/data/colors'
import Button from '../button/Button'
/**
 * Round green button with black text
 * @property text - text to display
 * @property fn - function to execute on click
 */
function ButtonRoundGreen(props)
{
    const propsModified = {...props}
    propsModified.color = colors.light_green
    propsModified.txtColor = null

    return(<Button {...propsModified}  />)
}
export default ButtonRoundGreen