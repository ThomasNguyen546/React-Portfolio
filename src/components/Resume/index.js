import React from 'react';
import profileImg from '../../assets/ProfilePicture.JPG'
import resumeImg from '../../assets/images/ResumeGraphic.png'
import resumeDownload from '../../assets/Resume.pdf';

function About() {
    return (
      <section>
        <div className="resume-container">
          <div id="about-header">
            <img src={profileImg} width="200" height="250" alt="Thomas Nguyen" class="profImg" />
              <div className="resumeImage">
              <img src={resumeImg} width="0" height="175" alt="Thomas Nguyen" className="profile-img" />
              </div>
            </div>
            <p id="resume-text">
                <a class="resume-text" href={resumeDownload} download="Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            </p>
        </div>
      </section>
    );
  }
  
  export default About;

 