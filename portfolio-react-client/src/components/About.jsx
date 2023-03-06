import './About.css'

const About = () => {
    return (
        <div >
            <div className="title">
                ABOUT ME
            </div>
            <hr className='horizontal-line'/>
            <div className="about-description">
                I'm an undergraduate senior student-athlete at Boston University, pursuing a dual-degree in computer science and 
                business administration with a concentration in business analytics. I'm also a member of the Boston University
                NCAA Division 1 Varsity Men's Basketball team. Currently, I'm looking for full-time software engineering positions
                for post-gradution in May 2023.
                <br></br>
                <br></br>
                Through my studies, I have gained a solid understanding of full-stack development, and have had the opportunity to work
                on various projects involving web application design and machine learning. Along with my technical skills, I have also 
                developed project leadership skills through managing and guiding teams towards successful project completion. As a driven
                and ambitious individual, I am eager to continue expanding on my knowledge and honing my skills in software engineering while
                contributing to impactful projects.
                <br></br>
                <br></br>
                Besides softare engineering, I enjoy playing basketball, watching sports, reading, studying French, and traveling.
                <br></br>
                <br></br>
                Here are some technologies I have worked with recently:
                <ul class="grid-list">
                    <li>Python</li>
                    <li>React</li>
                    <li>Django</li>
                    <li>JavaScript</li>
                    <li>AngularJS</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>Figma</li>
                    <li>Express</li>
                </ul>

            </div>
            <div className="about-education">
                EDUCATION
                <h2>Boston University</h2>
                <p>
                    BA in Computer Science
                    <br></br>
                    BS in Business Administration; Concentration: Business Analytics
                    <br></br>
                    3.57 GPA
                    <br></br>
                    Dean's List (2020,2021,2022)
                </p>
            </div>
            <div className="about-experience">
                EXPERIENCE
                <h2>Qualcomm Inc.</h2>
                <p>
                    Software Engineering Intern
                </p>
                {/* <h2>Invite Education LLC.</h2>
                <p>
                    Summer Intern
                </p> */}
            </div>
            <br></br>
            <div className="about-bottom" id="about">hey</div>
        </div >
    )
}

export default About