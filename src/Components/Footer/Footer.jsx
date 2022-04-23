import React from 'react'
import '../Footer/Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Mohit Rachuri</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Education'>Education</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Skills'>Skills</a></li>
        <li><a href='#Projects'>Projects</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/mohitrachuri'><BsLinkedin/></a>
        <a href='https://www.linkedin.com/in/mohitrachuri/'><ImGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mohit Rachuri. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer