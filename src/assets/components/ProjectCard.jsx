// In src/components/ProjectCard.jsx
import React from 'react';
// No need to import Link if you're not using react-router-dom

const ProjectCard = ({ title, subtitle, description, buttonText, link }) => {
  const handleExploreClick = () => {
    // Navigate to the specified link
    window.location.href = link; // This causes a full page reload
  };
  return (
    
    <div className="project-card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        <p className="card-description">{description}</p>
        {/* Use a standard anchor tag */}
        {/* The 'link' prop becomes the href attribute */}
        <a href={link} className="card-button"> {/* Use <a> tag */}
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;