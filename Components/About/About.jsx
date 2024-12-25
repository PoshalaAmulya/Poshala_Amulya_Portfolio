// import React from 'react'
import './About.css'
import html_logo from '../../assets/html.svg';
import css_logo from '../../assets/css.svg';
import js_logo from '../../assets/javascript.svg';
import bootstrap_logo from '../../assets/bootstrap.svg';
import react_logo from '../../assets/react.svg';
import node_logo from '../../assets/nodejs.svg';
import java from '../../assets/java.svg';
import ml_logo from '../../assets/ml_logo.png';
import share from '../../assets/share.png';


// import theme_pattern from '../../assets/theme_pattern.svg';
// import profile_img from '../../assets/about_profile.svg';
import profile_photo from '../../assets/profile-photo.jpg';

import dsa_logo from '../../assets/dsa.jpg';
import mysql from '../../assets/mysql.svg';
export const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1><span>About</span>&nbsp;Me</h1>
            {/* <img src={theme_pattern} alt="" />   */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_photo} alt="" />
            </div>
            <div className="about-right">
                <h1>Education</h1>
                <div className="edu">
                    <div className="label">
                        {/* <p>Degree :</p> */}
                        <p>College</p>
                        <p>Branch </p>
                        <p>Year </p>
                        <p>CGPA </p>
                    </div>
                    <div className="edu-details">
                        {/* <p>Bachelor Of Technology</p> */}
                        <p>ACE Engineering College</p>
                        <p>Computer Science & Engineering</p>
                        <p>2021-2025</p>
                        <p>9.0</p>
                    </div>
                </div>
                <div className="about-skills">
                <h1>Skills</h1>
                <div className="about-skill">
                    <img src={html_logo} alt="" />
                    <img src={css_logo} alt="" />
                    <img src={bootstrap_logo} alt="" />
                    <img src={js_logo} alt="" />
                    <img src={react_logo} alt="" />
                    <img src={node_logo} id="node" alt="" />
                    <img src={java} id="java" alt="" />
                    <img src={dsa_logo} id="java" alt="" />
                    <img src={mysql} id="java"  alt="" />
                    <img src={ml_logo} id="node" alt="" />
                </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <div className="profile">
                    <h1>LeetCode</h1>
                    <a href="https://leetcode.com/u/Poshala_Amulya/" target="_blank"><img src={share} alt="" /></a>
                </div>
                <p>Highest Rating: 1339</p>
            </div>
            <hr></hr>
            <div className="about-achievement">
                <div className="profile">
                    <h1>CodeChef</h1>
                    <a href="https://www.codechef.com/users/ace0457" target="_blank"><img src={share} alt="" /></a>
                </div>
                <p>2 Star Coder</p>
            </div>
            <hr></hr>
            <div className="about-achievement">
                <div className="profile">
                    <h1>GeeksForGeeks</h1>
                    <a href="https://www.geeksforgeeks.org/user/amulyaposhala1/" target="_blank"><img src={share} alt="" /></a>
                </div>
                <p>Institute Rank: 3</p>
            </div>
        </div>
    </div>
  )
}
export default About