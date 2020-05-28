import React from 'react';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components';
import background from '../../assets/wood.jpg';
import profile from '../../assets/ProfilePic.jpg'

const Styles = styled.div`
    .jumbotron {
        /* background: url(${background}) no-repeat fixed;
        background-size: cover; */
        min-height: 700px;
        height: 30vh;
        position: relative;
    }
    #avatar {
        margin-top: 100px;
        background-image: url(${profile});
        background-size: cover;
        height: 250px;
        width: 250px;
        border: black solid 3px;
        border-radius: 50%;
        display: block;
    }

    #bio {
        font-size: 30px;
        font-weight: 400;
        line-height: 1.5;
        font-family: "Open Sans", sans-serif;
        max-width: 400px;
        margin-top: 60px;
        margin-bottom: 45px;
        border-bottom: black 1px solid;
        padding-bottom: 35px;
    }

    .social-media {
        margin: 10px;
        margin-bottom: 100px;
    }

    #linkedin {
        color: #0e76a8;
    }

    #github {
        color: #6e5494;
    }

    #gitlab {
        color: #fa7035;
    }
`;

const Title = () => {
    function onClickProjects(e) {
        e && e.preventDefault();
        const element = document.getElementById("project-panel");
        element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <Styles>
            <div id="title" className="title">
                <div className="overlay"></div>
                <Container>
                    <Grid container align={"center"}>
                        <Grid item xs={12}>
                            <div id="avatar"></div>
                        </Grid>
                        <Grid item xs={12}>
                            <div id="bio">
                                I like machine learning, data visualization and backend development
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Styles>
    )
};

export default Title;
