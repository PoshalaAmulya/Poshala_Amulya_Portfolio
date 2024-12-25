// import React from 'react'
import './Navbar.css'; 
// import logo from '../../assets/logo.svg';
// import { useState } from 'react';
// import underline from '../../assets/nav_underline.svg';
//to get icon for mobile view//
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg'; 
//Here to navigate from one section to another section we use react-anchor-link-smooth-scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useRef } from 'react';
const Navbar = () => {
  // const [menu, setMenu] = useState("home");
  // In React, useRef() is a Hook that provides a way to directly access and
  //  manipulate a DOM element or persist a mutable value across renders without causing a re-render of the component. 
  // It is part of the React Hooks API introduced in React 16.8.
  // useRef() returns a mutable object called a ref object.
  // This ref object has a property called current, which is initialized to the argument passed to useRef().
  //this inistialsing is optional 
  // The current objectcan be used to store and access a value.
  // Changes to the current property do not trigger a re-render of the component.
  const menuref=useRef();

  // Initial State (right: -350px): The element is positioned 350px outside the right edge of the viewport, making it invisible.
  // Final State (right: 0): The element is positioned at the right edge of the viewport, making it fully visible.
  // Transition: The change between -350px and 0 is animated smoothly using CSS transitions or JavaScript.
  const openMenu=()=>{
    menuref.current.style.right="0";
  }
  const closeMenu=()=>{
    menuref.current.style.right= "-350px";
  }
  return (
    <div className='navbar'>
       <h1>I&apos;m&nbsp;&nbsp;<span>Amulya</span></h1>
        {/* <img src={logo}></img> */}
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mobile-open'/>
        <ul ref={menuref} className="nav-menu">
          <img src={menu_close} alt="" onClick={closeMenu}className="nav-mobile-close" />
            <li><AnchorLink className='anchor-link underline' href='#home'>Home</AnchorLink></li>
            {/* <li><AnchorLink className='anchor-link'offset={50} href='#services'><p onClick={()=> setMenu("projects")}>Projects</p></AnchorLink>{menu =="projects"?<img src={underline} alt=""/>:<></>}</li> */}
            <li><AnchorLink className='anchor-link underline'offset={50} href='#about'>About</AnchorLink></li>
            <li><AnchorLink className='anchor-link underline'offset={50} href='#services'>Projects</AnchorLink></li>
            <li><AnchorLink className='anchor-link underline'offset={50} href='#mywork'>Certifications</AnchorLink></li>
            <li><AnchorLink className='anchor-link underline'offset={50} href='#contact'>Contact</AnchorLink></li>
        </ul>
        {/* <AnchorLink className='anchor-link' offset={50} href='#contact'><div className='nav-connect'>Connect With Me</div></AnchorLink> */}
        {/* <p>This is Navbar</p> */}
    </div>
  )
}

export default Navbar