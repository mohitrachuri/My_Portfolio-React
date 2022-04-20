import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../Assets/MyPic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className=".container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohit Rachuri</h1>
        <h5 className='text-light'>Full Stack Developer, Data Scientist</h5>
        <CTA />
        <HeaderSocials />

        <div className='Me'>
          <img src= {Me} alt="me" />
        </div>

        <a href='#Contact' className='scroll__down'> Scroll Down</a>

      </div>
    </header>
  )
}

export default Header