import React from 'react'
import '../Projects/Projects.css'
import PortfolioPic from '../../Assets/Portfolio.jpg'

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
          <a href='https://github.com/mohitrachuri/My_Portfolio-React' className='btn' target='_blank'>GitHub</a>
        </article>

        {/* <article className='projects__item'>
          <div className='projects_item-image'>
            <img src={PortfolioPic} alt="" />
          </div>
          <h3> Proj 2 Title</h3>
          <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
        </article>

        <article className='projects__item'>
          <div className='projects_item-image'>
            <img src={PortfolioPic} alt="" />
          </div>
          <h3> Proj 3 Title</h3>
          <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
        </article>

        <article className='projects__item'>
          <div className='projects_item-image'>
            <img src={PortfolioPic} alt="" />
          </div>
          <h3> Proj 4 Title</h3>
          <a href='https://github.com' className='btn' target='_blank'>GitHub</a>
        </article>

        <article className='projects__item'>
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