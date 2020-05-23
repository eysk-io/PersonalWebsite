import React from 'react';
import Project from '../project/Project';

const ProjectPanels = ({ projects }) => {
    return (
        <div className="project-panel">
            {
                projects.map((project, index) => (
                    <Project
                        name={project.name}
                        img={project.img}
                        url={project.url}
                        desc={project.desc}
                        key={index}
                    />
                ))
            }
        </div >
    )
}

export default ProjectPanels;