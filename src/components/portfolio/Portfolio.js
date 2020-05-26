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

    function gridRatio(component) {
        console.log(component.type.name);
        return (
            component.type.name === "PortfolioItems" ? 6 : 3
        );
    }

    return (
        <div className="portfolio">
            <Grid container>
                {
                    components.map((component, index) => (
                        <Grid item key={index} xs={gridRatio(component)}>
                            {component}
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Portfolio;