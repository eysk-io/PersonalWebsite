import React, { useState } from 'react';
import PortfolioTitle from '../portfolio-title/PortfolioTitle';
import PortfolioItems from '../portfolio-items/PortfolioItems';
import { LeftButton, RightButton } from '../switch-buttons/SwitchButtons.index';
import PortfolioStyles from './Portfolio.styles';
import Grid from '@material-ui/core/Grid';

const Portfolio = ({ projects }) => {
    const titles = ["Projects", "Dev Experience"];
    const [clickNumber, setClickNumber] = useState(1);
    const [title, setTitle] = useState("Projects");

    const components = [
        <LeftButton onButtonClick={onButtonClick} />,
        <PortfolioItems projects={projects} title={title} />,
        <RightButton />
    ];

    function onButtonClick(e) {
        e.preventDefault();
        setClickNumber(calculateTitlesIndex(clickNumber));
        console.log(clickNumber);
        setTitle(titles[clickNumber]);
        console.log(title);
    }

    function calculateTitlesIndex(clickNumber) {
        clickNumber++;
        return clickNumber % titles.length;
    }

    function gridRatio(component) {
        return (
            component.type.name === "PortfolioItems" ? 8 : 2
        );
    }

    return (
        <PortfolioStyles>
            <div className="portfolio">
                <PortfolioTitle title={title} />
                < Grid container>
                    {
                        components.map((component, index) => (
                            <Grid className={component.type.name} item key={index} xs={gridRatio(component)}>
                                {component}
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </PortfolioStyles>
    );
}

export default Portfolio;