import React from 'react'
import githubImage from "../../assets/images/GitHubLogo.png"
import linkedinImage from "../../assets/images/linkedin.png"

function Footer() {

    return (
        <footer>
            <div className="social-links">
            <a href="https://github.com/thomasnguyen546" target="_blank" rel="noopener noreferrer">
                <img src={githubImage} alt="github-logo" />
            </a>
            <a href="https://www.linkedin.com/in/thomasnguyen546" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImage} alt="linkedIn-logo"/>
            </a>
            </div>
        </footer>
    )
}

export default Footer