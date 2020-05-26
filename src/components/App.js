import React from 'react';
import { render } from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import projects from '../assets/projects';
import { Header, Footer } from './global/index';
import Jumbotron from './title/Title';
import Portfolio from './portfolio/Portfolio';

const AppStyle = styled.div`
    a :hover {
        transform: translateY(-3px);
    }
`;

const App = () => {
    return (
        <AppStyle>
            <div className="root">
                <Header />
                <Jumbotron />
                <Portfolio projects={projects} />
                <Footer />
            </div >
        </AppStyle>
    );
};

render(<App />, document.getElementById("root"));