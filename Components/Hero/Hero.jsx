// import React from 'react'
import './Hero.css'      //come_out_of_Hero//Come_out_of_components//
// import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// install npm i react-simple-typewriter : 
//to get typescript dynamic font.
import {Typewriter} from 'react-simple-typewriter';
// import girl_profile from '../../assets/girl_profile.jpg';
// import girl_profile from '../../assets/girl_profile3.jpg' ;
 import girl_profile from '../../assets/girl_profile.jpg' ;

// import 'react-simple-typewriter//index.css';
// A passionate coder with strong expertise in data structures, algorithms, web development, and machine learning, driven to create innovative solutions and make a meaningful impact in the software development industry.

export const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={girl_profile} className="hero-img" alt="profile_image"></img>
        <h1>I&apos;m&nbsp;
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
            words={['Poshala Amulya','an UG Student','a Competitive Programmer','a Frontend Developer']}
          />
        </h1>


        <p> A passionate coder with strong expertise in data structures, algorithms, web development, and machine learning, driven to create innovative solutions and make a meaningful impact in the software development industry.</p>
        {/* <p> Highly motivated and results-oriented fourth-year student with a strong foundation in computer science fundamentals.
        Proficient in data structures and algorithms using Java.Looking for an opportunity to gain practical experience in
        software development and contribute to innovative projects within a dynamic and challenging environment.</p> */}
        <div className='hero-action'>
          <AnchorLink className='anchor-link' href='#contact' offset={50}><div className="hero-connect">Connect With Me</div></AnchorLink>
          <div className="resume"><a href="https://drive.google.com/file/d/1Cx5ILst0PhiUyRfCVOU5HtpTpG13BjcH/view?usp=sharing" target="_blank">My Resume</a></div>
        </div>
    </div>
  )
}
export default Hero