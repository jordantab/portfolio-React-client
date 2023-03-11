import resume from '../pages/Jordan Tab Resume.pdf'
import './Resume.css'

function Resume() {
    return (
      <div className='resume-container'>
        <iframe
          src={resume}
          style={{ width: '100%', height: '100%' }}
          title="Resume"
        ></iframe>
      </div>
    );
  }

export default Resume