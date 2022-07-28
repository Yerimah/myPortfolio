import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './portfolio.scss'
import Image1 from '../../assets/GifStock.gif'
import Image2 from '../../assets/bugetti.gif'
import Image3 from '../../assets/cine.gif'

import Image4 from '../../assets/freshimg.png'

const projects = [
  {
      id: 1,
      title: 'Stock App',
      description: 'Stock metrics is a web(mobile-focused) app for checking the companies listed on the stock exchange and see their live metrics.',
      img: Image1,
      demo: 'https://stockmetricapp.netlify.app/',
      repo: 'https://github.com/Yerimah/stock-metrics'

  },
  {
      id: 2,
      title: 'Budgeti App',
      description: 'Budgeti is a budget tracking app that helps you monitor how your budget was allocated and spent. Budgeti is built with Ruby on Rails and styled using boostrap.',
      img: Image2,
      demo: 'https://intense-harbor-49660.herokuapp.com/',
      repo: 'https://github.com/Yerimah/Budgeti'

  },
  {
      id: 3,
      title: 'Cinemash',
      description: 'The cinemash app is an online curation of blockbuster movies.',
      img: Image3,
      demo: 'https://cinemash.netlify.app/',
      repo: 'https://github.com/Yerimah/JS-Capstone-Project'

  },
  {
      id: 4,
      title: 'Fresh Start',
      description: 'Web app where Spanish students can practice translating six words every day. The students are able to create an account and keep track of their progress.',
      img: Image4,
      demo: 'https://yerimah.github.io/Capstone-project/',
      repo: 'https://github.com/Yerimah/Capstone-project'

  },
];

const Portfolio = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className='container portfolio'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />  
        </h1>
      </div>
      <div className="portfolio-card">
        {projects.map((project) => (
          <article className="portfolio-content" key={project.id}>
            
              <img src={project.img} alt="project thumbnail" className="portfolio-image" />
            
            <h3>{project.title}</h3>
            {/* <small className="desc">{project.description}</small> */}
            <div className="app-details">
              <a 
                href={project.repo} 
                className="btn" 
                target="_blank" 
                rel="noreferrer" >
                Source Code
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
                // onClick={() => gaEventTracker('View Live Demo')}
              >
                Live Demo
              </a>
            </div>
          </article>
        
        ))}
      </div>

    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Portfolio;