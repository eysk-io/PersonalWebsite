import React from 'react';
import Project from '../project/Project';
import projects from '../../assets/projects';

const ProjectPanels = () => {
    return (
        <div className="project-panel">
            {
                projects.map((project, index) => (
                    <Project
                        name={project.name}
                        img={project.img}
                        url={project.url}
                        key={index}
                    />
                ))
            }
        </div >
    )
}

export default ProjectPanels;