import './Header.css'
import Logo from './../../logo-al-napis.png'
import InfoPopup from '../popup/Popup'
import { navigate } from '../../App'
import {useNavigate} from 'react-router-dom'


export default function Header(){

    navigate.hook = useNavigate()

    return(
        <div className='header-main'>
            <InfoPopup/>
            <div className='header-logo'><a href='https://www.al.edu.pl'><img src = {Logo} alt = "logo"/></a></div>
        </div>
    )
}