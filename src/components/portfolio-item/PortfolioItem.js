import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const PortfolioItemStyles = styled.div`
    .portfolio-item {
        margin: auto;
        margin-bottom: 50px;
        max-width: 400px;
    }

    .MuiCardMedia-root {
        height: 250px;
        border-radius: 3px;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: hidden;
        margin: auto;
    }
`;

// const Styles = styled.div`
//     .project {
//         border-bottom: 1px black solid;
//         padding-bottom: 15px;
//         max-width: 650px;
//         margin: auto;
//     }
//     a.project-item {
//         text-align: center;
//         max-width: 500px;
//         max-height: 500px;
//         margin: 40px;
//         border-radius: 3px;
//         -moz-transition: all 0.3s ease;
//         -o-transition: all 0.3s ease;
//         -webkit-transition: all 0.3s ease;
//         transition: all 0.3s ease;
//         text-decoration: none;
//     }
//     a:hover {
//         opacity: 0.7;
//     }
//     a {
//         color: #212529;
//         background-color: transparent;
//         font-family: "Open Sans", sans-serif;
//         scroll-behavior: smooth;
//         box-sizing: border-box;
//     }
//     .project-desc {
//         opacity: 0.5;
//     }

//     .project-img img {
//         height: 100%;
//         width: 100%;
//         max-width: 500px;
//         max-height: 500px;
//         border-radius: 3px;
//         overflow: hidden;
//         overflow-x: hidden;
//         overflow-y: hidden;
//     }
// `;


const PortfolioItem = ({ name, img, url, desc }) => {
    return (
        <PortfolioItemStyles>
            <div className="portfolio-item">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            image={img}
                        />
                        <CardContent>
                            <div className="card=header">
                                {name}
                            </div>
                            <div className="card-desc">
                                {desc}
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <FontAwesomeIcon icon={faGithub} />
                    </CardActions>
                </Card>
            </div>
        </PortfolioItemStyles>
    )
    // return (
    //     <div className="project">
    //         <a
    //             className="project-item"
    //             target="_blank"
    //             href={url}
    //         >
    //             <div className="project-name">
    //                 {name}
    //             </div>
    //             <div className="project-desc">
    //                 {desc}
    //             </div>
    //             <div className="project-img">
    //                 <img src={img} />
    //             </div>
    //         </a>
    //     </div>
    // );
}

export default PortfolioItem;