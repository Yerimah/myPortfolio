import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Skills = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
  return (
    <>
    <div className='container skills-page'>
      <div className='heading'>
          <h1>
            <AnimatedLetters letterClass={letterClass}
              strArray={
                ['S', 'k', 'i', 'l', 'l', ' s', ' ', 'a', 'n', 'd', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />  
          </h1>
      </div>

    </div>
    
    </>
  )
}

export default Skills