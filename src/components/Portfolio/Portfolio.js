import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './portfolio.scss'

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

    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Portfolio