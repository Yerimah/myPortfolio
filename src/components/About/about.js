import React, { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import './About.scss'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <section>
      <div className='container about-page'>
        <div className='about-content'>
          <div className="about-head">
            <h1>
              <AnimatedLetters letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />  
            </h1>

            <p>I'm a very ambitious front end developer looking for a role in an established IT company with the
              opportunity to work with the latest technologies on challenging and innovative projects</p>
            <p>I'm confident and curious with a desire to consistently grow and improve my skills</p>
        </div>

          <div className='stage-cube-cont'>
            <div className='cubespinner'>
              <div className='face1'>
                <FontAwesomeIcon icon={faNode} color="#DD0031" />
              </div>
              <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className='face4'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>

            </div>
          </div>
          </div>
      </div>
        <Loader type='pacman' />
    </section>
  )
}

export default About;