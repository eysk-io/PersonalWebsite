import React from 'react';
import PortfolioItemsStyles from './PortfolioItems.styles';
import Project from '../project/Project';

const PortfolioItems = ({ portfolio }) => {

    return (
        <PortfolioItemsStyles>
            <div id="portfolio-items" className="portfolio-items" style={{ paddingTop: "100px" }}>
                {
                    portfolio[0].items.map((project, index) => (
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