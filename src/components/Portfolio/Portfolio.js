import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'

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
      <div>
        <h1>
          <AnimatedLetters letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />  
        </h1>
      </div>

    </div>
    </>
  )
}

export default Portfolio