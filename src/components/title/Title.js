import React from 'react';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components';
import background from '../../assets/wood.jpg';
import profile from '../../assets/ProfilePic.jpg'

const Styles = styled.div`
    #avatar {
        margin-top: 100px;
        background-image: url(${profile});
        background-size: cover;
        height: 250px;
        width: 250px;
        border: black solid 2px;
        border-radius: 50%;
        display: block;
    }

    #bio {
        font-size: 24px;
        font-weight: 400;
        line-height: 2;
        font-family: "Open Sans", sans-serif;
        max-width: 400px;
        margin-top: 60px;
        margin-bottom: 45px;
        border-bottom: black 1px solid;
        padding-bottom: 35px;
    }
`;

const Title = () => {
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
                                Hello there! I'm an aspiring Software Developer from Vancouver
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Styles>
    )
};

export default Title;
