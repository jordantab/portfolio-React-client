import './Contact.css'
import red1 from '../images/red-photoshoot-1.JPG'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {ImLinkedin2} from 'react-icons/im'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutlineMailOutline} from 'react-icons/md'
import {MdLocationPin} from 'react-icons/md'

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

    function sendEmail () {
        console.log("trying")
        const serviceID = 'service_bf951rj'
        const templateID = 'personal_website'
        const userID = 'zmoPJucrxBZpB4YS2'
        const templateParams = {
            from_name: name.current.value,
            to_name: "Jordan Tab",
            message: message.current.value,
            reply_to: email.current.value
        }

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
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
            <button onClick={sendEmail} className='send-email'>SEND</button>
            <button className="github" onClick={openGitHub}>
                <FaGithubSquare size={20}/>
            </button>
            <button className="linkedin" onClick={openLinkedIn}>
                <ImLinkedin2 size={20}/>
            </button>
            <div className="contact-footer" id="contact">
                <div className="footer-icons">
                    <div className="icon-wrapper">
                        <div className="icon-item"><BsFillTelephoneFill /></div>
                        <div className="icon-text">+1 (858) 232-7521</div>
                    </div>
                    <div className="icon-wrapper">
                        <div className="icon-item"><MdOutlineMailOutline /></div>
                        <div className="icon-text">jordantab20@gmail.com</div>
                    </div>
                    <div className="icon-wrapper">
                        <div className="icon-item"><MdLocationPin /></div>
                        <div className="icon-text">Boston, MA</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact