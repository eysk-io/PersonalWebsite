import React from 'react';
import PortfolioItems from '../portfolio-items/PortfolioItems';

const Portfolio = ({ projects }) => {
    return (
        <PortfolioItems
            projects={projects}
        />
    )
}

export default Portfolio;