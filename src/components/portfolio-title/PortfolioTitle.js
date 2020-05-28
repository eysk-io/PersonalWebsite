import React from 'react';
import PortfolioTitleStyles from './PortfolioTitle.styles';

const PortfolioTitle = ({ title }) => {
    return (
        <PortfolioTitleStyles>
            <div id="portfolio-title" className="portfolio-title">
                {title}
            </div>
        </PortfolioTitleStyles>
    );
}

export default PortfolioTitle;