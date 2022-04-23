import React from 'react'
import '../Contact/Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithubInverted} from 'react-icons/vsc'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_alo6hne', 'template_z5j2idc', form.current, 'W_g9j089jCoaTfZl3')
    e.target.reset()
  };

  return (
    <section id='Contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
            <h3>Email</h3>
            <h4>mohit.rachuri@outlook.com</h4>
            <a href='mailto:mohit.rachuri@outlook.com'>Send A Message</a>
          </article>

          <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
            <h3>Linkedin</h3>
            <h4>Mohit Rachuri</h4>
            <a href='https://www.linkedin.com/in/mohitrachuri/' target="_blank">View My Profile</a>
          </article>
          
          <article className='contact__option'>
          <VscGithubInverted className='contact__option-icon'/>
            <h3>GitHub</h3>
            <h4>mohitrachuri</h4>
            <a href='https://github.com/mohitrachuri' target="_blank">View My Profile</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows = "7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact