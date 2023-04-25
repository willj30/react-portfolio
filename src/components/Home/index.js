import { useState } from 'react'
import { Loader } from 'react-loaders'
import LogoTitle from '../../assets/images/wtitle.jpg'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'


const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = [
        'i',
        'l',
        'l',
        ' ',
        'J',
        'a',
        'r',
        'a',
        'm',
        'i',
        'l',
        'l',
        'o',
    ]
    const jobArray = [
        'F',
        'u',
        'l',
        'l',
        ' ',
        'S',
        't',
        'a',
        'c',
        'k',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
    ]

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>

                        <img src={LogoTitle} alt="hero" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Developing / Selling Software / Making Hot Sauce</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>

                </div>
                
                <Logo />
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Home
