import React from 'react'
import hero from '../assets/hero.avif';
const Home = () => {
  return (
 <div className="home">
      {/* Left side content */}
      <div className="home-content">
        <h1>
          Hi, I'm <span className="name">MAJID ALI</span> 👋
        </h1>
        <p>
          I am a beginner web developer learning React.  
          This is my portfolio website.
        </p>
      
      </div>

      {/* Right side image */}
      <div className="home-image">
        <img src={hero} alt="Profile" />
      </div>
    </div>
  );
}


  


export default Home