import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import background from '../../assets/wood.jpg';

const Styles = styled.div`
    .jumbotron {
        background: url(${background}) no-repeat fixed bottom;
        background-size: cover;
        height: 500px;
        position: relative;
    }
`;

const Title = () => (
    <Styles>
        <div className="title">
            <Jumbotron fluid className="jumbotron">
                <div className="overlay"></div>
                <Container>
                    <h1>Hello</h1>
                </Container>
            </Jumbotron>
        </div>
    </Styles>
);

export default Title;
