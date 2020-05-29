import React from 'react';
import Grid from '@material-ui/core/Grid';
import PortfolioItemsStyles from './PortfolioItems.styles';
import PortfolioItem from '../portfolio-item/PortfolioItem';

const PortfolioItems = ({ experiences, title }) => {
    return (
        <PortfolioItemsStyles>
            <div id="portfolio-items" className="portfolio-items">
                <Grid container>
                    {
                        experiences.map((item, index) => (
                            <Grid item xs={12} lg={6}>
                                <PortfolioItem
                                    name={item.name}
                                    img={item.img}
                                    url={item.url}
                                    desc={item.desc}
                                    company={title === "TECHNICAL EXPERIENCE" ? item.company : null}
                                    key={index}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </div >
        </PortfolioItemsStyles>
    );
}

export default PortfolioItems; 