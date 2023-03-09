import './Home.css'
import headshot from '../images/headshot.png'

const Home = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div>
            <div className="name">JORDAN TAB</div>
            <div className="home-description">
                I'm an undergraduate senior <b>student-athelete</b> at <b>Boston University</b>,
                pursuing a dual-degree in <b>computer science</b> and <b>business administration</b>.
                I'm looking for full-time <b>software engineering</b> positions for post-graduation
                in May 2023.
            </div>
            <div className='background-wave'></div>
            <button className='learn-more' onClick={() => scrollToSection('about')}>LEARN MORE</button>
            <button className='contact-me'onClick={() => scrollToSection('contact')}>CONTACT ME</button>
            <img src={headshot} alt='headshot' className='headshot'/>
        </div>
    )
}

export default Home