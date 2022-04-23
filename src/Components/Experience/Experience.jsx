import React from 'react'
import '../Experience/Experience.css'
import {BsDot} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>What I Do</h5>
      <h2>Work Experience</h2>

      <div className='container Experience__container'>
        {/*Start of MTI*/}
        <article className='Experience'>
          <div className='Experience__head'>
            <h3>Maryland Transportation Institute</h3>
            <small>Web Developer (April 2022 - Present)</small>
          </div>
          <ul className='Experience__list'>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Maintained and refactored a web-based incentivized administration and transportation data analysis system as a full-stack engineer using React.js, Node.js, and Python.</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Designed and implemented a traffic simulation website using Material UI, ApexCharts, and Mapbox GL.</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Built an Authentication and Authorization Module for Users of the organization using Auth0.</p>
            </li>
            {/* <li>
              <BsDot className='Experience__list-icon'/>
              <p>Work 4</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Work 5</p>
            </li> */}
          </ul>
        </article>
        {/*Enf of MTI */}

        {/*Start of Fraunhofer*/}
        <article className='Experience'>
          <div className='Experience__head'>
            <h3>Fraunhofer USA CMA</h3>
            <small>Junior Research Scientist (October 2021 - April 2022)</small>
          </div>
          <ul className='Experience__list'>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Working on Data Visualization and Machine Learning models for Predictive Modelling/ Analysis systems.</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Developed algorithm to identify dynamic patterns detects in data used for predictive analysis, information loss approximation, feature detection.</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Built a UI Dashboard using Vue Js, for the users to see data of various sensors using Chart Js and send alerts when a abnormal activity is detected.</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Maintained and Refactored Fraunhofer USA CMA Web application using Adobe Experience Manager.</p>
            </li>
            {/* <li>
              <BsDot className='Experience__list-icon'/>
              <p>Work 5</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Work 6</p>
            </li> */}
          </ul>
        </article>
        {/*Enf of Fraunhofer */}

        {/*Start of Accenture*/}
        <article className='Experience'>
          <div className='Experience__head'>
            <h3>Accenture Solutions</h3>
            <small>Application Developer (June 2020 - July 2021)</small>
          </div>
          <ul className='Experience__list'>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Technologies worked on: Oracle - ADF,SOA,BPM / Java & JVM Languages / REST SOAP Web Services.</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Oracle Fusion Middleware Developer (OSB and BPEL)</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Business Problem Analysis </p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Design Analysis (BPEL Orchestrations)</p>
            </li>
            <li>
              <BsDot className='Experience__list-icon'/>
              <p>Agile Planning (With team and business management people</p>
            </li>
          </ul>
        </article>
        {/*Enf of Accenture */}
      </div>
    </section>
  )
}

export default Experience