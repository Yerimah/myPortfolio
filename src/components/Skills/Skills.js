import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './skills.scss'

const Skills = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
  return (
    <>
    <section id='experience-page'>
    <div className='container skills-page'>
      <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass}
              strArray={
                ['S', 'k', 'i', 'l', 'l', ' s', ' ', 'a', 'n', 'd', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />  
          </h1>
      </div>
     
      <div className='content'>
      <p>A full-stack Software Engineer with hands-on experience in developing 
        innovative web solutions using JavaScript | React | Redux | Ruby | Ruby on Rails. 
        I'm exceptional for my appreciation of clean code, intuitive designs, 
        and resilience in solving problems, debugging, and testing codes</p>
      <p>Over time, I have gained experience working on everything from low-fidelity wireframe 
        planning and execution to complex APIs with the ability to scale up quickly and efficiently 
        while pair-programming with developers from diverse backgrounds and cultures.</p>
      <p>I seek opportunities that expose me to evolving global best practices and work 
        with smart people who are driven to impact the world with technology.</p>
     </div>
    </div>

    {/* <div className='container experience'>
      <div className='front-experience'>
      <h3>Frontend Development</h3>
        <article>
          <h4>HTML/CSS</h4>
        </article>
        
        <article>
          <h4>JAVASCRIPT</h4>
        </article>
        
        <article>
          <h4>REACT</h4>
        </article>
        
        <article>
          <h4>BOOTSTRAP</h4>
        </article>
      </div>

      <div className='back-experience'>
      <h3>Backend Development</h3>
        <article>
          <h4>RUBY</h4>
        </article>
        
        <article>
          <h4>MYSQL</h4>
        </article>
        
        <article>
          <h4>NODE.JS</h4>
        </article>
      </div>
    </div> */}
    </section>
    <Loader type="pacman" />
    </>
  )
}

export default Skills