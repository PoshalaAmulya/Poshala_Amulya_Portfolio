import React from 'react'
import './Footer.css'  
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg' 
export const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p> Passinoate Computer Science student with strong expertise in DSA, Machine learning , Web development, Computer Fudamentals</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email'/>
                </div>
                <div className="footer-sub">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"> &copy; 2024 Poshala Amulya . All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}
export default Footer
