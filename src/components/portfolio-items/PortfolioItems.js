import React from 'react';
import Grid from '@material-ui/core/Grid';
import PortfolioItemsStyles from './PortfolioItems.styles';
import PortfolioItem from '../portfolio-item/PortfolioItem';

const PortfolioItems = ({ experiences }) => {
    return (
        <PortfolioItemsStyles>
            <div id="portfolio-items" className="portfolio-items">
                <Grid container>
                    {
                        experiences.map((item, index) => (
                            <Grid item xs={12} xl={6}>
                                <PortfolioItem
                                    name={item.name}
                                    img={item.img}
                                    url={item.url}
                                    desc={item.desc}
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