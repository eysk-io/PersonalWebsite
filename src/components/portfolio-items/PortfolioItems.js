import React from 'react';
import styled from 'styled-components';
import Project from '../project/Project';

const PortfolioItemsStyles = styled.div`
    .portfolio-items {
        margin: auto;
        height: 100vh;
        overflow-y: scroll;
        width: 75%;
    }
`;

const PortfolioItems = ({ projects }) => {
    return (
        <PortfolioItemsStyles>
            <div id="portfolio-items" className="portfolio-items" style={{ paddingTop: "100px" }}>
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
        </PortfolioItemsStyles>
    );
}

export default PortfolioItems; 