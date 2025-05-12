import React from 'react'
import Navigation from './assets/components/Navigation'
import "./App.css"
import Main from './assets/components/Main'
import Skills from './assets/components/Skills'
import ProjectSection from './assets/components/ProjectSection'
import ContactForm from './assets/components/ContactForm'
import Newsletter from './assets/components/Newsletter'

const App = () => {
  return (
    <div>
      <Navigation/>
      <Main/>
      <Skills/>
      <ProjectSection/>
      <section id="getintouch2">
        <div className='project-section'>
          <ContactForm />
          <Newsletter/>
        </div>
      </section>
    </div>
  )
}

export default App
