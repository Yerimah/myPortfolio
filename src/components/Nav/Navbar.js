import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser, faHome, faEnvelope, faBriefcase, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="side-bar">
      <Link className="brand" to="/">
        Daniel Yerimah
      </Link>
      <nav>
          <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink 
            exact="true" 
            activeclassname="active" 
            className="portfolio-link" 
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </NavLink>
          <NavLink 
            exact="true" 
            activeclassname="active" 
            className="skills-link" 
            to="/skills"
          >
            <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
          </NavLink>
          <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
      </nav>
      <ul>
        <li>
          <a 
            target="_blank" 
            rel='noreferrer' 
            href='https://www.linkedin.com/in/daniel-yerimah/'
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a 
            target="_blank" 
            rel='noreferrer' 
            href='https://www.github.com/yerimah/'
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a 
            target="_blank" 
            rel='noreferrer' 
            href='https://www.twitter.com/iamdeewyne'
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a 
            target="_blank" 
            rel='noreferrer' 
            href='https://www.youtube.com/channel/UC5Z2FLDoeZQSM3n40z4JQkg'
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar