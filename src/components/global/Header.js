import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import { HeaderStyles } from "./global-styles/global.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    function onClickHome(e) {
        e && e.preventDefault();
        scrollToTop();
    }

    function scrollToTop() {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    function onClickProjects(e) {
        e && e.preventDefault();
        const element = document.getElementById("portfolio");
        element.scrollIntoView({ top: 0, behavior: "smooth" });
    }

    return (
        <header>
            <HeaderStyles>
                <Navbar fixed="top" variant="dark">
                    <Container>
                        <Grid container align="center">
                            <Grid item xs={12}>
                                <div className="header-name">
                                    <a href="#" onClick={onClickHome.bind(this)}>
                                        ERIC Y. KIM
                                    </a>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="header-sub">
                                    <a href="#" onClick={onClickProjects.bind(this)}>
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