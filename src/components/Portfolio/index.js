import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import movieSnackers from '../../assets/images/movieSnackers.png'
import jate from '../../assets/images/jate.png'
import listup from '../../assets/images/listup.jpg'
import teamProfile from '../../assets/images/teamProfile.png'
import dayOff from '../../assets/images/dayOff.png'
import weatherApp from '../../assets/images/weatherApp.png'

const Portfolio = () => {
    const [letterClass] = useState('text-animate')
    const [portfolio] = useState([])



    const renderPortfolio = (portfolio) => {
        return (
            <>
            <div className="portfolio-container">
            <div className="images-container">
                {<div className="image-box">
                    <img
                        src={movieSnackers}
                        className="portfolio-image"
                        alt="portfolio" />
                    <div className="content">
                        <p className="title">Movie Snackers Blog</p>
                        <h4 className="description">
                            Review site for movie goers where they can post reviews or comment on movie reviews, then, earn snacks to see more movies.
                        </h4>
                        <button
                            className="btn"
                            onClick={() => window.open(
                                'https://movie-snackers.herokuapp.com/'
                            )}
                        >
                            Deployed App
                        </button>
                    </div>
                </div>}
                
            </div><div className="images-container">
                    {<div className="image-box">
                        <img
                            src={jate}
                            className="portfolio-image"
                            alt="portfolio" />
                        <div className="content">
                            <p className="title">J.A.T.E.</p>
                            <h4 className="description">
                                Progressive Web Application text editor that allows users to use either online or locally without an interet connection.
                            </h4>
                            <button
                                className="btn"
                                onClick={() => window.open(
                                    'https://github.com/willj30/pwa-text-editor'
                                )}
                            >
                                GitHub Repo
                            </button>
                        </div>
                    </div>}
                    
                </div>
                <div className="images-container">
                    {<div className="image-box">
                        <img
                            src={listup}
                            className="portfolio-image"
                            alt="portfolio" />
                        <div className="content">
                            <p className="title">List Up Marketplace</p>
                            <h4 className="description">
                                E-Commerce application that allows users to buy and sell niche items.
                            </h4>
                            <button
                                className="btn"
                                onClick={() => window.open(
                                    'https://listup-marketplace.herokuapp.com/'
                                )}
                            >
                                Deployed App
                            </button>
                        </div>
                    </div>}
                    
                </div></div>
                <div className="portfolio-container">
                <div className="images-container">
                    {<div className="image-box">
                        <img
                            src={teamProfile}
                            className="portfolio-image"
                            alt="portfolio" />
                        <div className="content">
                            <p className="title">Team Profile Generator</p>
                            <h4 className="description">
                                Application that renders a team profile based on user input.
                            </h4>
                            <button
                                className="btn"
                                onClick={() => window.open(
                                    'https://github.com/willj30/team-profile-generator'
                                )}
                            >
                               GitHub Repo
                            </button>
                        </div>
                    </div>}
                    
                </div>
                <div className="images-container">
                    {<div className="image-box">
                        <img
                            src={dayOff}
                            className="portfolio-image"
                            alt="portfolio" />
                        <div className="content">
                            <p className="title">Day Off Planner</p>
                            <h4 className="description">
                                Site that helps users plan their day off by viewing events and the weather forecast in their area.
                            </h4>
                            <button
                                className="btn"
                                onClick={() => window.open(
                                    'https://adam42288.github.io/team-4-project/'
                                )}
                            >
                                Deployed App
                            </button>
                        </div>
                    </div>}
                    
                </div>
                <div className="images-container">
                    {<div className="image-box">
                        <img
                            src={weatherApp}
                            className="portfolio-image"
                            alt="portfolio" />
                        <div className="content">
                            <p className="title">Weather App</p>
                            <h4 className="description">
                                App for checking the weather in any city.
                            </h4>
                            <button
                                className="btn"
                                onClick={() => window.open(
                                    'https://willj30.github.io/weather-dashboard/'
                                )}
                            >
                                Deployed App
                            </button>
                        </div>
                    </div>}
                    
                </div>
                </div></>
        )
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                            idx={15}
                        />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Portfolio
