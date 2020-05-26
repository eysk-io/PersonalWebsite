import React from 'react';
import Project from '../project/Project';

const Portfolio = ({ projects }) => {
    return (
        <div id="project-panel" className="project-panel" style={{ paddingTop: "100px" }}>
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

export default Portfolio;