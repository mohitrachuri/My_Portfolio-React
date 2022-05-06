import React from 'react'
import '../Skills/Skills.css'
import {BsCodeSlash} from 'react-icons/bs'
import {MdWebAsset} from 'react-icons/md'
import {BiPackage} from 'react-icons/bi'
import {FiDatabase} from 'react-icons/fi'
import {AiOutlineBulb} from 'react-icons/ai'
import {BiGitPullRequest} from 'react-icons/bi'

const Skills = () => {
  return (
    <section id='Skills'>
      <h5>Technologies I Am Good With</h5>
      <h2>Skills</h2>

      <div className='container skills__container'>
{/*Programming */}
        <div className="Programming Languages">
          <h3>Programming</h3>
          <div className='skills__content'>
            <article className='skills__details'>
            <BsCodeSlash className='skills__details_icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <BsCodeSlash className='skills__details_icon'/>
            <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <BsCodeSlash className='skills__details_icon'/>
            <div>
              <h4>Java Script</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <BsCodeSlash className='skills__details_icon'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <BsCodeSlash className='skills__details_icon'/>
            <div>
              <h4>C</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <BsCodeSlash className='skills__details_icon'/>
            <div>
              <h4>System Design</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
          </div>
        </div>

{/*Web Development */}
        <div className="Web Development">
        <h3>Web Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
            <MdWebAsset className='skills__details_icon'/>
            <div>
              <h4>React JS</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <MdWebAsset className='skills__details_icon'/>
            <div>
              <h4>Vue JS</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <MdWebAsset className='skills__details_icon'/>
            <div>
              <h4>HTML 5, CSS</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <MdWebAsset className='skills__details_icon'/>
            <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <MdWebAsset className='skills__details_icon'/>
            <div>
              <h4>Flask</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <MdWebAsset className='skills__details_icon'/>
            <div>
              <h4>Node Js</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
          </div>
        </div>
{/* Softwares & Libraries */}
        <div className="Frameworks">
        <h3>Frameworks</h3>
          <div className='skills__content'>
            <article className='skills__details'>
            <BiPackage className='skills__details_icon'/>
            <div>
              <h4>Scikit-Learn</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <BiPackage className='skills__details_icon'/>
            <div>
              <h4>Pandas, Numpy</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <BiPackage className='skills__details_icon'/>
            <div>
              <h4>TensorFlow</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <BiPackage className='skills__details_icon'/>
            <div>
              <h4>PyTorch</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <BiPackage className='skills__details_icon'/>
            <div>
              <h4>OpenAI</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <BiPackage className='skills__details_icon'/>
            <div>
              <h4>Keras</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
          </div>

        <div className="Database Technologies">
        <h3>Database Technologies</h3>
          <div className='skills__content'>
            <article className='skills__details'>
            <FiDatabase className='skills__details_icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <FiDatabase className='skills__details_icon'/>
            <div>
              <h4>PostgresSQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <FiDatabase className='skills__details_icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <FiDatabase className='skills__details_icon'/>
            <div>
              <h4>Oracle DB</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <FiDatabase className='skills__details_icon'/>
            <div>
              <h4>FireBase</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>

        <div className="Miscellaneous">
        <h3>Miscellaneous</h3>
          <div className='skills__content'>
            <article className='skills__details'>
            <AiOutlineBulb className='skills__details_icon'/>
            <div>
              <h4>Doker</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <AiOutlineBulb className='skills__details_icon'/>
            <div>
              <h4>Kubernetees</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <AiOutlineBulb className='skills__details_icon'/>
            <div>
              <h4>Spring Boot</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <AiOutlineBulb className='skills__details_icon'/>
            <div>
              <h4>AWS</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <AiOutlineBulb className='skills__details_icon'/>
            <div>
              <h4>Android Studio</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
            <AiOutlineBulb className='skills__details_icon'/>
            <div>
              <h4>Matlab</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
          </div>
        </div>

        <div className="Repository Control">
        <h3>Repository Control</h3>
          <div className='skills__content'>
            <article className='skills__details'>
            <BiGitPullRequest className='skills__details_icon'/>
            <div>
              <h4>Git Hub</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <BiGitPullRequest className='skills__details_icon'/>
            <div>
              <h4>Git Lab</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <BiGitPullRequest className='skills__details_icon'/>
            <div>
              <h4>Jira</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <BiGitPullRequest className='skills__details_icon'/>
            <div>
              <h4>Bash</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
            <article className='skills__details'>
            <BiGitPullRequest className='skills__details_icon'/>
            <div>
              <h4>Azure</h4>
              <small className='text-light'>Advanced</small>
            </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills