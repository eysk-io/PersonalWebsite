import React, { useState } from 'react';
import PortfolioTitle from '../portfolio-title/PortfolioTitle';
import PortfolioItems from '../portfolio-items/PortfolioItems';
import { LeftButton, RightButton } from '../switch-buttons/SwitchButtons.index';
import PortfolioStyles from './Portfolio.styles';
import Grid from '@material-ui/core/Grid';

const Portfolio = ({ portfolio }) => {
    const portfolioItems = portfolio.map(each => ({
        name: each.name,
        experience: each.items,
    }));
    const [clickNumber, setClickNumber] = useState(1);
    const [title, setTitle] = useState(portfolioItems[0].name);
    const [experiences, setExperiences] = useState(portfolioItems[0].experience);

    function onButtonClick(e) {
        e.preventDefault();
        setClickNumber(calculateTitlesIndex(clickNumber, e));
        setTitle(portfolioItems[clickNumber].name);
        setExperiences(portfolioItems[clickNumber].experience);
        const element = document.getElementById("portfolio");
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function calculateTitlesIndex(clickNumber, e) {
        e.target.dataset.icon === "chevron-circle-left" ? clickNumber-- : clickNumber++;
        return Math.abs(clickNumber % portfolioItems.length);
    }

    function gridRatio(component) {
        return (
            component.type.name === "PortfolioItems" ? 8 : 2
        );
    }

    const components = [
        <LeftButton onButtonClick={onButtonClick} />,
        <PortfolioItems experiences={experiences} title={title} />,
        <RightButton onButtonClick={onButtonClick} />
    ];

    return (
        <PortfolioStyles>
            <div id="portfolio" className="portfolio">
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