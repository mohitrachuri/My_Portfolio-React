import React from 'react'
import '../Projects/Projects.css'
import PortfolioPic from '../../Assets/Portfolio.jpg'
import KG from '../../Assets/KG.jpg'
import GL from '../../Assets/Glaucoma.jpg'

const Projects = () => {
  return (
    <section id='Projects'>
      <h5>My</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={PortfolioPic} alt="" />
          </div>
          <h3>Portfolio Project</h3>
          <small>• Created my Personal Portfolio website and hosted on Github Pages.<br />
                 • Completely coded from scratch and completely responsive.<br />
                 • Implemented and used several react hooks and states.<br />
                 • Tech Stack Used: React JS, HTML, CSS, Swiper Js, Github Pages.<br />
                  </small>
          <a href='https://github.com/mohitrachuri/My_Portfolio-React' className='btn' target='_blank'>GitHub</a>
        </article>

        <article className='projects__item'>
          <div className='projects_item-image'>
            <img src={KG} alt="" />
          </div>
          <h3>Knowledge Grab - Online Learning Management System</h3>
          <small>• Knowledge Grab is an Online Learning Management System that tend to allow users enroll for courses that they are interested in like Programming Languages etc.<br /> 
                 • Any User can act as a Content creator as well as a student. A Full-Stack application has been built from scratch and deployed on AWS.</small>
          <a href='https://github.com/mohitrachuri/Knowledge-Grab' className='btn' target='_blank'>GitHub</a>
        </article>

        <article className='projects__item'>
          <div className='projects_item-image'>
            <img src={GL} alt="" />
          </div>
          <h3>Detection of Glaucoma Using Fundus Images of Retina</h3>
          <small>• Worked as a lead in Developing and Publishing the Research Paper. ISSN: 2347-7180.<br />
                 • Presented a computational tool for automatic glaucoma detection. Developed and reported improvements for disc segmentation, 
                    and a Deep Learning – Neural Network Box method to classify the disease.<br />
                    </small>
          <a href='https://github.com/mohitrachuri/Detection-Of-Glaucoma-Using-Fundus-Images-Of-Retina' className='btn' target='_blank'>GitHub</a>
        </article>

        <article className='projects__item'>
          <div className='projects_item-image'>
          </div>
          <h3>More Uploading...</h3>
        </article>

        {/* <article className='projects__item'>
          <div className='projects_item-image'>
            <img src={PortfolioPic} alt="" />
          </div>
          <h3> Proj 5 Title</h3>
          <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
        </article>

        <article className='projects__item'>
          <div className='projects_item-image'>
            <img src={PortfolioPic} alt="" />
          </div>
          <h3> Proj 6 Title</h3>
          <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
        </article> */}

      </div>
    </section>
  )
}

export default Projects