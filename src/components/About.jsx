import React from 'react'

const About = () => {
  return (
       <div className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi! I'm <span className="highlight">MAJID ALI</span>, a beginner web developer 
          passionate about learning React and building modern websites.  
          My goal is to improve my skills and create user-friendly, responsive, and creative web applications.
        </p>
        <p>
          I enjoy solving coding challenges, exploring new technologies, 
          and working on exciting projects. 🚀
        </p>
          <a href="../src/Majid_Ali_CV.pdf" target="_blank" rel="noopener noreferrer">
        <button className="btn">VIEW MY CV</button>
        </a>
      </div>
    </div>

  )
}

export default About