import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faGithub,
    faHtml5,
    faJsSquare,
    faNodeJs,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import GitHubCalendar from 'react-github-calendar'
import { Link } from 'react-router-dom'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <div>
                <Link to="https://docs.google.com/document/d/1IzeSrmkEXuzt3uDrNTm_dLLTsVpDrGLQQYHU3qBHidk/edit?usp=sharing" className="flat-button">
                    VIEW RESUME
                </Link>
                </div>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                    </div>
                </div>
            </div>
         
        </div>
        <div className='github-container'>
      <h1>
        GitHub Activity
      </h1>
      <GitHubCalendar
        username="willj30"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
        <Loader type="cube-transition" />
        </>
    )
}

export default About
