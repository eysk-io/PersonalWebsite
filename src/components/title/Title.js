import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components';
import background from '../../assets/wood.jpg';
import profile from '../../assets/ProfilePic.jpg'

const Styles = styled.div`
    .jumbotron {
        background: url(${background}) no-repeat fixed bottom;
        background-size: cover;
        height: 700px;
        position: relative;
    }
    #avatar {
        background-image: url(${profile});
        background-size: cover;
        height: 300px;
        width: 300px;
        border: black solid 3px;
        border-radius: 50%;
        display: block;
    }
`;

const Title = () => (
    <Styles>
        <div className="title">
            <Jumbotron fluid className="jumbotron">
                <div className="overlay"></div>
                <Container>
                    <Grid container align={"center"}>
                        <Grid item xs={12}>
                            <div id="avatar"></div>
                        </Grid>
                        <Grid item xs={12}>
                            <h1>
                                Hi
                            </h1>
                        </Grid>
                    </Grid>
                </Container>
            </Jumbotron>
        </div>
    </Styles>
);

export default Title;
