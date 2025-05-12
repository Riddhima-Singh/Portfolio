import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <section id='projects'>
        <h2 className="section-title">Projects</h2>
      </section>
      <p className='hi'>A collection of practical and creative projects built to solve real-world problems with modern design and development.</p>
      <div className="projects-grid">
        <ProjectCard
          title="TravelTrail"
          subtitle="Travel the World"
          description="Explore destinations globally with immersive travel experiences."
          buttonText="Explore More"
          link="/traveltrail-details.html"
        />
        <ProjectCard
          title="Hospital Management"
          subtitle="Manage with Care"
          description="Streamline hospital operations and enhance patient care with intelligent healthcare solutions."
          buttonText="Explore More"
          link="/hosp.html"
        />
        <ProjectCard
          title="Tribute Page"
          subtitle="Honor a Legacy"
          description="Celebrate the life, achievements, and impact of someone who inspired the world."
          buttonText="Explore More"
          link="/tribute.html"
        />
        <br />
        <ProjectCard
          title="Disaster Management"
          subtitle="Preparedness and Response"
          description="Involves preparing for, responding to, and recovering from disasters to reduce harm and save lives."
          buttonText="Explore More"
          link="/disaster.html"
        />
        <ProjectCard
          title="Amazon Clone"
          subtitle="Online Shopping Interface"
          description="project that replicates the design and basic functionality of Amazon, such as product listings, cart, and checkout, etc."
          buttonText="Explore More"
          link="/amazon.html"
        />
        <ProjectCard
          title="Portfolio"
          subtitle="Showcase of Skills and Projects"
          description="Personal website to display skills, work, and achievements and other informations."
          buttonText="Explore More"
          link="/port.html"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
