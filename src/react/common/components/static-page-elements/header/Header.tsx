import { navigate } from '../../../../../App'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import Popup from '../../popup/Popup'


export default function Header(){

    const Logo = require("../../../../../logo-al-napis.png")

    navigate.hook = useNavigate()

    return(
        <div className='header-main'>
            <Popup/>
            <div className='header-logo'><a href='https://www.al.edu.pl'><img src = {Logo} alt = "logo-al"/></a></div>
        </div>
    )
}