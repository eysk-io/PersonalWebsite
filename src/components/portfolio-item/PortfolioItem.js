import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import PortfolioItemStyles from './PortfolioItem.styles';

const PortfolioItem = ({ name, img, url, desc, company }) => {
    return (
        <PortfolioItemStyles>
            <div className="portfolio-item">
                <a href={url} target="_blank">
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                image={img}
                                action={url}
                            />
                            <CardContent>
                                <div className="card-header">
                                    {name}
                                    <br />
                                    <div className="company-name">
                                        {company !== null ? company : null}
                                    </div>
                                </div>
                                <div className="card-desc">
                                    {desc}
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a>
            </div>
        </PortfolioItemStyles>
    );
}

export default PortfolioItem;