import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import PortfolioItemStyles from './PortfolioItem.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const PortfolioItem = ({ name, img, url, desc, company }) => {
    console.log(company);
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