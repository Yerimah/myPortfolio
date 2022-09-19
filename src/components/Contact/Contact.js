import React, { useState, useEffect, useRef } from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  
  const [ letterClass, setLetterClass ] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mnyjtd8', 'template_f7kv71z', refForm.current, 'DOXEBZVOXExQKEERi')
      .then(() => {
          alert('Message successfully sent!')
          window.location.reload(false)
      }, 
      () => {
          alert('Failed to send the message, please try again');
      });
    }

  return (
    <>
    <div className='container contact-page'>
      <div className='contact_cont'>
        <div className='contact-header'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass} 
          strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
          idx={15}
          />
        </h1>
        <p>
          I am interested in exploring different opportunities and collaborations from remote to freelance.
          If you have other requests or questions, don't hesitate to contact me through the form 
          OR Call: +234 703 247 3322, +234 704 231 0018
        </p>
        </div>

        <div className='contact-form'>
        <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input 
                type="text" 
                name='name' 
                placeholder='Name' 
                required />
              </li>
              <li className='half'>
                <input 
                type="email" 
                name='email' 
                placeholder='Email' 
                required />
              </li>
              <li>
                <input 
                type="text" 
                name='subject ' 
                placeholder='Subject' 
                required />
              </li>
              <li>
                <textarea 
                name='message' 
                placeholder='Message' 
                required></textarea>
              </li>
              <li>
                <input type='submit' className='flat-button' value='Send' />
              </li>
            </ul>
        </form>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    
    </>
  )
}

export default Contact;