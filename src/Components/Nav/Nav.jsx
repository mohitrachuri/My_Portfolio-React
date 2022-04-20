import React from 'react'
import '../Nav/Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {SiMusicbrainz} from 'react-icons/si'
import {BiGitBranch} from 'react-icons/bi'
import {BiMessageSquareAdd} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#About' onClick={() => setActiveNav('#About')}  className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#Education' onClick={() => setActiveNav('#Education')}  className={activeNav === '#Education' ? 'active' : ''}><BiBook/></a>
      <a href='#Experience' onClick={() => setActiveNav('#Experience')}  className={activeNav === '#Experience' ? 'active' : ''}><MdWorkOutline/></a>
      <a href='#Skills' onClick={() => setActiveNav('#Skills')}  className={activeNav === '#Skills' ? 'active' : ''}><SiMusicbrainz/></a>
      <a href='#Projects' onClick={() => setActiveNav('#Projects')}  className={activeNav === '#Projects' ? 'active' : ''}><BiGitBranch/></a>
      <a href='#Contact' onClick={() => setActiveNav('#Contact')}  className={activeNav === '#Contact' ? 'active' : ''}><BiMessageSquareAdd/></a>
    </nav>
  )
}

export default Nav