import React from 'react';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid'
import TitleStyles from './Title.styles';

const Title = () => {
    return (
        <TitleStyles>
            <div id="title" className="title">
                <div className="overlay"></div>
                <Container>
                    <Grid container align={"center"}>
                        <Grid item xs={12}>
                            <div id="avatar"></div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="bio">
                                Hello there! I'm an aspiring Software Developer in Vancouver
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </TitleStyles>
    )
};

export default Title;
