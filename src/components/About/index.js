import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'
import {
    faCss3,
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
    const [letterClass] = useState('text-animate')
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
                    <p>I recently completed the UT Austin Full-Stack coding bootcamp and look forward to continuing to learn and improve my skills. To the right are just a few of the languages I have learned which also include: AJAX · GraphQL · SQL · GitHub · Node.js · Express.js · Shell Scripting · Bash · HTML · CSS · JavaScript · Responsive Web Design · Bootstrap · Progressive Web Applications (PWAs) · Session Storage · IndexedDB · React.js · Client-Server Model · API Development · RESTful WebServices · JSON</p>
                    <p>For my day job, I sell K12 administrative software to school districts across Texas and help them move away from paper processes and into the 21st century with more efficient, and automated, workflows.</p>
                    <p>I also have a side business where I make and sell hot sauces at the local farmers market. These are all homemade and I have five flavors! Check them out at <a target='_blank' rel="noreferrer" href='https://www.willysworldfamous.com'>www.willysworldfamous.com </a>or through my instagram link in the sidebar.</p>
                    <p>At home, I live with my fiance, newborn son, and two dogs. We love to travel every chance we get! As for hobbies, I enjoy restoring retro video game consoles and games, repairing bicycles, and all kinds of DIY projects around the house</p>
                    <div>
                        <Link
                            to="https://docs.google.com/document/d/1IzeSrmkEXuzt3uDrNTm_dLLTsVpDrGLQQYHU3qBHidk/edit?usp=sharing"
                            className="flat-button"
                        >
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
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="github-container">
                <h1>GitHub Activity</h1>
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
