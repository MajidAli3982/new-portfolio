import React from 'react'

const Hero = () => {
  return (
<section className="hero">
      {/* animated background blobs */}
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="overlay" />

      <div className="hero-inner">
        <p className="kicker">Welcome to our Portfolio</p>

        <h1 className="title">
          Hi, I’m <span className="gradient">Majid</span>
        </h1>

        <h2 className="typing">I am MERN Stack Developer</h2>

        <p className="subtitle">
          I build modern web apps with MongoDB, Express, React, and Node.js.
        </p>

       
      </div>
    </section>
  )
}

export default Hero