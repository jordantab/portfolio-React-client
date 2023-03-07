import './Projects.css'
import { useState } from 'react'
import forAMD from '../images/for-amd.png'
import portfolio from '../images/portfolio.png'

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
            <div className="for-amd-description">hshsh</div>
            <div className="for-amd-technologies">
                REACT&nbsp; &nbsp;DJANGO&nbsp; &nbsp;MONGODB &nbsp;&nbsp;GOOGLE PHOTOS API&nbsp; &nbsp;HEROKU &nbsp;&nbsp;NETLIFY
            </div>
            <div className="smbf"></div>
            <div className="smbf-description">shhdvbs</div>
            <div className="smbf-technologies">
                REACT&nbsp; &nbsp;DJANGO&nbsp; &nbsp;MONGODB &nbsp;&nbsp;FOOTBALL API&nbsp; &nbsp;YELP API
            </div>
            <div className="portfolio"></div>
            <img src={portfolio} alt='portfolio' className='portfolio-photo'/>
            <div className="portfolio-description">hshsh</div>
            <div className="portfolio-technologies">
            REACT&nbsp; &nbsp;FIGMA&nbsp;&nbsp;
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