import React from 'react'

const Navigation = () => {
  return (
    <nav>
        <div className='logo'>
            <h2><a href="#port">PORTFOLIO</a></h2>
        </div>
        <div className='navb'>
            <li> <a href="#port">HOME</a></li>
            <li> <a href="#skills">SKILLS</a></li>
            <li> <a href="#projects">PROJECT</a></li>
        </div>
        <div className='navb2'>
            <h2><a href="riddhima.singh1510@gmail.com" className="icon-circle"> <i class="bi bi-envelope"></i></a></h2>
            <h2><a href="https://www.linkedin.com/in/riddhima-singh-11a39428b/" className="icon-circle"> <i class="bi bi-linkedin"></i></a></h2>
            <h2><a href="https://github.com/Riddhima-Singh" className="icon-circle"> <i class="bi bi-github"></i></a></h2>
        </div>
        <div className='get'>
        <a href="#contact" className="get-in-touch-btn">Get In Touch</a>
        </div>
        
    </nav>
    
  )
}

export default Navigation
