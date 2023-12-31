import React from 'react'
import "./Footer.css"
import {GrLinkedin} from "react-icons/gr"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>Portfolio Website</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/karan-kumar-yadav-b3049112a/" target='_blank'><GrLinkedin/></a>
      <a href="https://www.facebook.com/karan.yadav.94617999" target='_blank'><BsFacebook/></a>
      <a href="https://instagram.com/i_m_kky?igshid=NGExMmI2YTkyZg==" target='_blank'><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Portfolio Website. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
