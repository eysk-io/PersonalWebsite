import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
    .navbar {
        background: linear-gradient(to right, #292b2c, #000000);
    }
    .nav-link {
        float: right;
    }
    .dropdown:hover .dropdown-menu {
        display: block;
    }
`;

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
        const element = document.getElementById("project-panel");
        element.scrollIntoView({ top: 0, behavior: "smooth" });
    }

    return (
        <header>
            <Styles>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" onClick={onClickHome.bind(this)}>
                            <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: 10 }} />
                            Eric Y. Kim
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link
                                onClick={onClickProjects.bind(this)}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>

                    </Container>
                </Navbar>
            </Styles>
        </header >
    );
}

export default Header;