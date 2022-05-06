import React from 'react'
import '../About/About.css'
import {MdWorkOutline} from 'react-icons/md'
import {BiBook} from 'react-icons/bi'
import {SiMusicbrainz} from 'react-icons/si'
import {BiGitBranch} from 'react-icons/bi'

const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__content'>
        <div className='about__cards'>

          <article className='about__card'>
            <BiBook className='about__Icon'/>
            <h5>Education</h5>
            <small>Currently pursuing Master's In Software Engineering</small>
          </article>

          <article className='about__card'>
            <MdWorkOutline className='about__Icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className='about__card'>
            <SiMusicbrainz className='about__Icon'/>
            <h5>Skills</h5>
            <small>Full Stack Development, Data Science, Deep Learning</small>
          </article>

          <article className='about__card'>
            <BiGitBranch className='about__Icon'/>
            <h5>Projects</h5>
            <small>An International Research Publication & 20+ Projects in various Domains</small>
          </article>
        </div>
        
        <p>
        📍I'm a Developer and Researcher with a drive to create innovative products.<br />
        📍 Full Stack Developer, skilled in Object oriented programming as well as Database management & Containerization.<br />
        📍 I come from a solid technical background which includes Back-End and Front-End Engineering, Core Operating Systems, Full Stack Web Dev<br />
        📍 I wish to implement Artificial intelligence techniques in vast areas such as Software Development, Quantitative Finance, Blockchain and Quantum 
          Computing, by arriving at methodologies to understand a given domain by mathematical modelling. <br />
        📍 In my spare time, I read philosophy books, watch sci-fi series or movies and play e-sports.
        
        </p>

        <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
      </div>

    </section>
  )
}

export default About