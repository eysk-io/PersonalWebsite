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

const Header = ({ projects }) => {
    return (
        <header>
            <Styles>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: 10 }} />
                            Eric Y. Kim
                        </Navbar.Brand>
                        <Nav>
                            <NavDropdown
                                title="Projects"
                            >
                                {projects.map((project, index) => (
                                    <NavDropdown.Item href={project.url} target={"_blank"} key={index} >
                                        {project.name}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown >
                        </Nav>
                    </Container>
                </Navbar>
            </Styles>
        </header >
    );
}

export default Header;