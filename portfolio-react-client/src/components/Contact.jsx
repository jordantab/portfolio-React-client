import './Contact.css'
import red1 from '../images/red-photoshoot-1.JPG'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {ImLinkedin2} from 'react-icons/im'

const Contact = () => {
    const name = useRef()
    const email = useRef()
    const message = useRef()

    function openGitHub () {
        window.open("https://github.com/jordantab");
    }
    
    function openLinkedIn () {
        window.open("https://www.linkedin.com/in/jordantab/");
    }

    return (
        <div>
            <div className="contact-title">
                GET IN TOUCH
            </div>
            <div className="contact-horizontal-line"></div>
            <div className="email"></div>
            <img src={red1} alt='contact-photo' className='contact-photo'/>
            <div className="email-title">CONTACT ME</div>
            <div className="email-sender">
                {/* MESSAGE */}
            </div>
            <div className="email-name-input">
                <input 
                type="text"
                id="email-name-input"
                placeholder='FULL NAME'
                ref={name}
                />
            </div>
            <div className="email-address-input">
                <input 
                type="text"
                id="email-address-input"
                placeholder='EMAIL'
                ref={email}
                />
            </div>
            <div className="email-message-input">
               <textarea className=""ref={message} rows="12" cols="34" placeholder="MESSAGE"/>
            </div>
            <button className='send-email'>SEND</button>
            <button className="github" onClick={openGitHub}>
                <FaGithubSquare size={30}/>
            </button>
            <button className="linkedin" onClick={openLinkedIn}>
                <ImLinkedin2 size={30}/>
            </button>
            <div className="contact-footer" id="contact"></div>
        </div>
    )
}

export default Contact