import React from 'react'
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_taxug71', 'template_68ozfkl', form.current, 'SyoiPYoakRD_sUMNT')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Conatct Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <acticle className="contact__option">
            <MdOutlineEmail className='conatct__option-icon'/>
            <h4>Email</h4>
            <h5>karan.yadav132@gmail.com</h5>
            <a href='mailto:karan.yadav132@gmail.com' target='_blank'>Send a message</a>
          </acticle>

          <acticle className="contact__option">
            <BsMessenger className='conatct__option-icon'/>
            <h4>Messenger</h4>
            <h5>Message me..</h5>
            <a href='https://m.me/karan.yadav.94617999' target='_blank'>Send a message</a>
          </acticle>

          <acticle className="contact__option">
            <BsWhatsapp className='conatct__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9717883819</h5>
            <a href='https://web.whatsapp.com/send?phone+919717883819' target='_blank'>Send a message</a>
          </acticle>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
