// import React from 'react'
import './Contact.css'
import call from '../../assets/call.svg';
import gmail from '../../assets/mail.svg';
import location from '../../assets/location.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';


export const Contact = () => {
    // To implement the form submission functionality 
    // go to web3forms documentation and follow the steps
    // step1: give email id to get API key
    // step2: copy the onSubmit function and paste it , before the returning the component . 
    // step3: replace the api key with your API key. 
    // step4: add the onSubmit function to the form tag

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6466020f-0512-409c-85fc-0e3fac169539");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
        //To get alret after submitting the form
        if(res.success){
              alert(res.message);
              event.target.reset();// to reset the form after submitting
          }
      };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In <span>touch</span></h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="contact-sec">
            <div className="contact-left">
                <h1>Let<span>&apos;</span>s Talk</h1>
                {/* <p>My Name is Poshala Amulya currently persuing my BTech from ACE Engineering College with an overall CGPA of 9.0</p> */}
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={gmail} alt="" />
                        <p>amulyaposhala.contact@gmail.com</p>
                    </div>
                    <div id="call" className="contact-detail">
                        <img src={call} alt="" />
                        <p>+91-7989051814</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" />
                        <p>Hyderabad,Telangana</p>
                    </div>
                </div>
                <div className="contact1">
                    <a href="https://www.linkedin.com/in/poshala-amulya-61221123a/"><img src={linkedin}alt="" /></a>
                    <a href="https://github.com/PoshalaAmulya"><img src={github} alt="" /></a>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter your name' name='name' id="" required />
                <label htmlFor="">Email</label>
                <input type="email" name='email' placeholder='Enter your email id' id="" required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" placeholder='Enter your message' rows="10" required></textarea>
                <button type="subimit" className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}
export default Contact
