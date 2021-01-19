import React from 'react';
import profileImg from '../../assets/ProfilePicture.JPG'

function About() {
    return (
      <section>
        <div className="page-container">
          <div id="about-header">
            <img src={profileImg} width="250" height="300" alt="Thomas Nguyen" className="profile-img" />
              <div className="section-title">
                <h2>About Me</h2>
              </div>
            </div>
            <p id="about-text">
                Welcome to my Portfolio Page! My name is Thomas Nguyen and I graduated with a Bachelor's of Science in Finance from the David Eccles Business School at the University of Utah.
                After graduating with my Finance degree, I decided to enroll into a coding bootcamp from the University of Utah. I hope that my finance background along with the knowledge I've 
                gained through the coding bootcamp will make me a valuable asset.
            </p>
            <br>
            </br>
            <p id="about-text">
                Outside of coding and education, I consider myself a social person. I love to play video games specifically and compete. One of the opportunities that I got to experience
                was being a part of the University of Utah's very first e-sports team. I was a League of Legends player on scholarhip at the University of Utah since the inception of their e-sports
                program, and continued to be on the team till I graduated. Being on the team has taught me many valuable experiences such as working in a team environment to achieve a common goal, interacting
                in a team environment, as well as lead the team when we competed against colleges across the nation.
            </p>
        </div>
      </section>
    );
  }
  
  export default About;