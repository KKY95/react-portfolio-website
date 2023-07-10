import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/karan-kumar-yadav-b3049112a/" target='_blank'><BsLinkedin/></a>
      <a href="https://www.facebook.com/karan.yadav.94617999" target='_blank'><BsFacebook/></a>
      <a href="https://instagram.com/i_m_kky?igshid=NGExMmI2YTkyZg==" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
