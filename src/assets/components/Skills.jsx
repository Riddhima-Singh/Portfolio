import React, { useState } from 'react';

const Skills = () => {
  const [selected, setSelected] = useState(null); // Start with nothing selected

  const skillData = {
    'Tech Stack': [
      'JavaScript', 'React','Python',
      'DSA', 'C++' , 'C',
      'CSS', 'HTML', 'Java',
      'SQL Databases (MySQL)',
      'NoSQL Databases (MongoDB)', 'Git'
    ],
    'Skills': [
      'Problem Solving', 'Communication',
      'Critical Thinking', 'Team Collaboration',
      'Time Management', 'Analytical Thinking', 
      'Excel', 'PowerPoint',
      'Leadership', 'Networking'
    ],
    'Software': [
      'VS Code', 'Postman', 'Figma',
      'Photoshop', 'GitHub', 'Canva'
    ]
  };

  return (
    <div className="skills-container">
        <div className='hello'>
            <section id='skills'>
                 <h2>Skills</h2>
            </section>
            
            <p>These are some of the key skills I’ve developed through learning and practical experience. <br /> They reflect my strengths and areas of expertise that help me contribute effectively to projects and teams.</p>
        </div>
      <div className="category-circles">
        {Object.keys(skillData).map((category) => (
          <div
            key={category}
            className={`circle ${selected === category ? 'active' : ''}`}
            onClick={() => setSelected(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Conditionally render skills grid if something is selected */}
      {selected && (
        <div className="skills-grid-section">
          <h2>{selected}</h2>
          <div className="skills-grid">
            {skillData[selected].map((item, index) => (
              <div key={index} className="skill-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
