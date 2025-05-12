import React from 'react'
import TypingText from './TypingText.jsx';

const Main = () => {
  return (
    <main className='content'>
        <div className='cont'>
            <h3 id='port'>Welcome to my portfolio</h3>
            <TypingText />
            <p>I am a Computer Science undergraduate with a strong interest in software development and emerging technologies. <br /> My academic background, combined with hands-on project experience, has equipped me with a solid foundation in <br /> building efficient and user-focused applications. This portfolio reflects my journey, skills, and commitment <br /> to continuous learning and innovation.</p>
            <section>
              <a href="#contact" className="get-in-touch-link">
              <h4>Get In Touch</h4></a>
            </section>
            <div className='photo'>
              <img src="\images\girl.avif" alt="photo" />
            </div>
        </div>


    </main>
  )
}

export default Main
