import React, { useEffect, useState } from 'react'
import './style.scss'
import Actions from './Actions'
import myPhoto from '../../assets/photo.png'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate')
  const nameArray = ['D', 'a', 'n', 'i', 'e', 'l', ' ', 'Y', 'e', 'r', 'i', 'm', 'a', 'h', ',', '']
  const jobArray = ['a', '', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className='hero_content'>
        <div className="main">
            <h1>
              <span className={letterClass}>H</span> 
              <span className={`${letterClass} _12`}>i</span> 
            <br /> 
              <span className={`${letterClass} _13`}>I</span> 
              <span className={`${letterClass} _14`}>'m</span> <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
             <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22} />
            </h1>
          <p>I create visually appealing and functional user interfaces for websites and applications. 
            As a strong supporter of clean and responsive design, 
            I can bring ideas to life with scalable and readable code that adheres to best practices.</p>
          <Actions />
        </div>
        <div className='hero-img'>
          <img className='img-card' src={myPhoto} alt='Daniel Yerimah' />
        </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home;