import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import { HeaderStyles } from "./global-styles/global.styles";

const Header = () => {
    function onClickProjects(e) {
        e && e.preventDefault();
        const element = document.getElementById("portfolio");
        element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <header>
            <HeaderStyles>
                <Navbar fixed="top" variant="dark">
                    <Container>
                        <Grid container align="center">
                            <Grid item xs={12}>
                                <div className="header-name">
                                    ERIC Y. KIM
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="header-sub">
                                    <a href="/" onClick={onClickProjects.bind(this)}>
                                        Projects
                                    </a>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="header-sub">About</div>
                            </Grid>
                        </Grid>
                    </Container>
                </Navbar>
            </HeaderStyles>
        </header >
    );
}

export default Header;