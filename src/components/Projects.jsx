import React from 'react';
import Project from './Project';
import './Projects.css';

function Projects() {
  const projectList = [
    { title: 'Project 1', description: 'Description 1', link: '#' },
    { title: 'Project 2', description: 'Description 2', link: '#' },
    { title: 'Project 3', description: 'Description 3', link: '#' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
