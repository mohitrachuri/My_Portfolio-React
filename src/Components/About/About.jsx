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
            <small>Master's In Software Engineering</small>
          </article>

          <article className='about__card'>
            <MdWorkOutline className='about__Icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className='about__card'>
            <SiMusicbrainz className='about__Icon'/>
            <h5>Skills</h5>
            <small>Full Stack Development, Data Science, Machine Learning</small>
          </article>

          <article className='about__card'>
            <BiGitBranch className='about__Icon'/>
            <h5>Projects</h5>
            <small>Research and Projects</small>
          </article>
        </div>

        <p>
        My goal is to become a successful Data scientist by arriving at methodologies to help in understanding a given domain by mathematically modelling and implementing the same through software solutions using Machine learning methods. I wish to understand and implement these Artificial intelligence techniques in advanced Medical & Space research so that, one day, we can go where 'no man has gone before'.
        I am also a Full Stack Developer, skilled in Object oriented programming (Python, Java, C/C++) as well as Database management & Web development.
        </p>

        <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
      </div>

    </section>
  )
}

export default About