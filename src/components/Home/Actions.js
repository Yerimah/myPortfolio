import React from 'react'
import CV from '../../assets/CV.pdf'
import './actions.scss'

const Actions = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn-primary'>Download Cv</a>

      <a href='#contact' className='btn'>Let&lsquo;s talk</a>

    </div>
  )
}

export default Actions;