import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className="navbar-heading">Trainify </h1> 
      <div className="nav-menu">
       <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#subscription">Subscription</a></li>
       </ul>
      </div>
      <div className="connect">
        <button
  onClick={() =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }
>
  Connect with Me
</button>
        </div>
 </nav>
     
    
  )
}

export default Navbar
