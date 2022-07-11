import React, { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import './About.scss'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import photo from '../../assets/photo.png'

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
        <div className='text-zone'>
            <h1>
              <AnimatedLetters letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />  
            </h1>

          <div className='content'>
            <p>I'm a very ambitious front end developer looking for a role in an established IT company with the
              opportunity to work with the latest technologies on challenging and innovative projects</p>
            <p>I'm confident and curious with a desire to consistently grow and improve my skills</p>
          </div>
        </div>

        {/* <div className='about'>
            <div className='about-image'>
              <img src={photo} alt='photo' width='100px' height='100px' />
            </div>
          </div> */}

          <div className='stage-cube-cont'>
            <div className='cubespinner'>
              <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color="#" />

              </div>

            </div>
          </div>
      </div>
        
    </section>
  )
}

export default About;