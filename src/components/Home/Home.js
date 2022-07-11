import React from 'react'
import './style.scss'
import Actions from './Actions'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="main">
            <h1>Hi, <br /> I'm <span>Daniel Yerimah</span>
             <br/>
            Full-Stack Software developer
            </h1>
          <h2>Software developer / Youtuber / Digital media strategist</h2>
          <Actions />
        </div>
      </div>
    </>
  )
}

export default Home;