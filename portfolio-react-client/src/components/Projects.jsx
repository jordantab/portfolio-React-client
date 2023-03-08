import './Projects.css'
import { useState } from 'react'
import forAMD from '../images/for-amd.png'
import portfolio from '../images/portfolio.png'
import {FaGithubSquare} from 'react-icons/fa'
import {BsBoxArrowUpRight} from 'react-icons/bs'

const Projects = () => {
    const [menuChoice, setMenuChoice] = useState('fsd')
    
    function ChooseFSD () {
        setMenuChoice('fsd')
    }

    function ChooseML () {
        setMenuChoice('ml')
    }

    return (
        <div>
            {menuChoice === 'fsd' ? 
            <>
             <div className="projects-title">
                MY PROJECTS
            </div>
            <div className="projects-horizontal-line"></div>
            <div className="fsd" onClick={ChooseFSD}>
                Full-Stack Development
            </div>
            <div className="ml" onClick={ChooseML}>
                Machine Learning
            </div>
            <div className="menu-bar"></div>
            <div className="fsd-bar"></div>
            <div className="for-amd"></div>
            <img src={forAMD} alt='forAMD' className='for-amd-photo'/>
            <div className="for-amd-description">
                <h2>forAMD</h2>
                <p>
                A web application designed for couples to share their photos, 
                suggest new date ideas, and surprise each other with a fun and exciting treasure hunt. The platform 
                features a special section that allows users to categorize their photos by date and location, making it easy 
                to keep track of their adventures. Originally created as a Valentine's Day gift for my girlfriend, 
                forAMD has the potential to become a commercialized platform that can help couples enhance their relationships.
                </p>
            </div>
            <div className="for-amd-technologies">
                REACT&nbsp; &nbsp;DJANGO&nbsp; &nbsp;MONGODB&nbsp; &nbsp;GOOGLE PHOTOS API&nbsp; &nbsp;HEROKU&nbsp; &nbsp;NETLIFY
            </div>
            <div className="for-amd-github">
                <a href="https://github.com/jordantab/forAMD-frontend">
                    <button>
                        <FaGithubSquare size={30}/>
                    </button>
                </a>
            </div>
            <div className="for-amd-link">
                <a href="https://foramd.com">
                    <button>
                        <BsBoxArrowUpRight size={30}/>
                    </button>
                </a>
            </div>
            <div className="smbf"></div>
            <div className="smbf-description">
                <h2>Soccer Match Brewery Finder</h2>
                <p>This web application allows soccer fans to easily discover nearby breweries based on the location of their matches, 
                    making it simple to plan post-match activities and experience the local culture.</p>
            </div>
            <div className="smbf-technologies">
                REACT&nbsp; &nbsp;DJANGO&nbsp; &nbsp;MONGODB&nbsp; &nbsp;FOOTBALL API&nbsp; &nbsp;YELP API
            </div>
            <div className="smbf-github">
                <a href="https://github.com/jordantab/411">
                    <button>
                        <FaGithubSquare size={30}/>
                    </button>
                </a>
            </div>
            <div className="smbf-link">
                <a href="https://jordantab.com">
                    <button>
                        <BsBoxArrowUpRight size={30}/>
                    </button>
                </a>
            </div>
            <div className="portfolio"></div>
            <img src={portfolio} alt='portfolio' className='portfolio-photo'/>
            <div className="portfolio-description">
                <h2>Personal Website</h2>
                <p>My personal website showcases my background and projects. It's a hub for potential clients or employers 
                    to learn more about me and my work.</p>
            </div>
            <div className="portfolio-technologies">
            REACT&nbsp; &nbsp;FIGMA&nbsp; &nbsp;HEROKU&nbsp; &nbsp;
            </div>
            <div className="portfolio-github">
                <a href="https://github.com/jordantab/portfolio-React-client">
                    <button>
                        <FaGithubSquare size={30}/>
                    </button>
                </a>
            </div>
            <div className="portfolio-link">
                <a href="https://jordantab.com">
                    <button>
                        <BsBoxArrowUpRight size={30}/>
                    </button>
                </a>
            </div>
            <div className="projects-bottom" id="projects">hey</div>
            </>
            :
            <>
             <div className="projects-title">
                MY PROJECTS
            </div>
            <div className="projects-horizontal-line"></div>
            <div className="fsd" onClick={ChooseFSD}>
                Full-Stack Development
            </div>
            <div className="ml" onClick={ChooseML}>
                Machine Learning
            </div>
            <div className="menu-bar"></div>
            <div className="ml-bar"></div>
            <div className="baseball"></div>
            <div className="mobile-money"></div>
            <div className="projects-bottom" id="projects">hey</div>
            </>
            }
           
        </div>
    )
}

export default Projects