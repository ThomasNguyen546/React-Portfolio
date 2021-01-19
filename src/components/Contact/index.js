import React from "react";
import githubImage from "../../assets/images/GitHubLogo.png"
import linkedinImage from "../../assets/images/linkedin.png"

function Contact() {
    return (
        <div className="resume-container">

            <div class="p-2 text-center overcast">

                <p><a class="contactInfo" href="https://github.com/thomasnguyen546">GitHub</a></p>
                <br></br>
                <a href="https://github.com/thomasnguyen546" target="_blank" rel="noopener noreferrer">
                    <img src={githubImage} alt="github-logo" />
                </a>
                <br></br>
                <br></br>
                <p><a class="contactInfo" href="https://www.linkedin.com/in/thomasnguyen546">LinkedIn</a></p>
                <br></br>
                <a href="https://www.linkedin.com/in/thomasnguyen546" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImage} alt="linkedIn-logo" />
                </a>
                <br></br>
                <br></br>
                <p class="contactInfo">Email</p>
                <br></br>
                <p class="emailInfo">ThomasNguyen546@gmail.com</p>
            </div>

        </div>
    )
}

export default Contact;



