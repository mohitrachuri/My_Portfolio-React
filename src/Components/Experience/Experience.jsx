import React from "react";
import "../Experience/Experience.css";
import { BsDot } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="Experience">
      <h5>What I Do</h5>
      <h2>Work Experience</h2>

      <div className="container Experience__container">
        {/*Start of MTI*/}
        <article className="Experience">
          <div className="Experience__head">
            <h3>Maryland Transportation Institute</h3>
            <small>Web Developer (April 2022 - Present)</small>
          </div>
          <ul className="Experience__list">
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Maintained and refactored a web-based incentivized
                administration and transportation data analysis system as a
                full-stack engineer using React.js, Node.js, and Python.
              </p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Designed and implemented a traffic simulation website using
                Material UI, ApexCharts, and Mapbox GL.
              </p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Built an Authentication and Authorization Module for Users of
                the organization.
              </p>
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
        {/*End of MTI */}

        {/*Start of Fraunhofer*/}
        <article className="Experience">
          <div className="Experience__head">
            <h3>Fraunhofer USA CMA</h3>
            <small>Junior Research Scientist (October 2021 - April 2022)</small>
          </div>
          <ul className="Experience__list">
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Working on Data Visualization and Machine Learning models for
                Predictive Modelling/ Analysis systems.
              </p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Developed algorithm to identify dynamic patterns detects in data
                used for predictive analysis, information loss approximation,
                feature detection.
              </p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Built a UI Dashboard using Vue Js, for the users to see data of
                various sensors using Chart Js and send alerts when a abnormal
                activity is detected.
              </p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Maintained and Refactored Fraunhofer USA CMA Web application
                using Adobe Experience Manager.
              </p>
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
        {/*End of Fraunhofer */}

        {/*Start of Accenture*/}
        <article className="Experience">
          <div className="Experience__head">
            <h3>Accenture Solutions</h3>
            <small>Application Developer (June 2020 - July 2021)</small>
          </div>
          <ul className="Experience__list">
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
              Technologies worked on: Oracle - ADF, SOA, BPM / Java & JVM Languages / REST SOAP Web Services.
              </p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>Built & maintained various flows in a Banking System (Core Banking Transformation).</p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>Worked with Business Problem Analysis, Design Analysis, Agile Planning.</p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>Coded the frontend using Oracle Tools (ADF) and backend internal flow using Bootstrap, JQuery.</p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>Architected and Implemented Restful APIs using Node.JS, Connecting to Oracle Databases.</p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>Fixed numerous bugs across the stack in Java Script, Business process Management. 
                And created Spanner tables in order to optimize query times.</p>
            </li>
          </ul>
        </article>
        {/*End of Accenture */}

        {/*Start of Climber*/}
        <article className="Experience">
          <div className="Experience__head">
            <h3>The Climber</h3>
            <small>Sales And Marketing Intern (May 2019 - Aug 2019)</small>
          </div>
          <ul className="Experience__list">
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Worked with a team of Marketers and strategists to develop new
                ways to market the product and Increase Departmental Revenues.
              </p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Increased repurchase by ~14% through lifestyle analysis, 3
                pronged strategy.
              </p>
            </li>
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
                Drove ~20% increase in lead capture by targeting previously
                omitted site activity such as discount seeking and abandoning
                cart.
              </p>
            </li>
          </ul>
        </article>
        {/*End of Climber */}

        {/*Start of ECIL*/}
        <article className="Experience">
          <div className="Experience__head">
            <h3>Electronics Corporation of India Limited (ECIL)</h3>
            <small>Project Intern (May 2018 - Jul 2018 )</small>
          </div>
          <ul className="Experience__list">
            <li>
              <BsDot className="Experience__list-icon" />
              <p>
              Produced Prototypes of Digital Scientific Calculators to Real-Time Users, and developed improvements based on User feedback.
              </p>
            </li>
          </ul>
        </article>
        {/*Enf of ECIL */}
      </div>
    </section>
  );
};

export default Experience;
