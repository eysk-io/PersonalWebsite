import React from 'react';
import PortfolioItems from '../portfolio-items/PortfolioItems';
import RightButton from '../switch-buttons/RightButton';
import LeftButton from '../switch-buttons/LeftButton';
import Grid from '@material-ui/core/Grid';

const Portfolio = ({ projects }) => {
    const components = [
        <LeftButton />,
        <PortfolioItems projects={projects} />,
        <RightButton />
    ]

    return (
        <div className="portfolio">
            <Grid container>
                {
                    components.map((component, index) => (
                        <Grid item key={index} xs={4}>
                            {component}
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Portfolio;