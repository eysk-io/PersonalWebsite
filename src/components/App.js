import React from 'react';
import { render } from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import projects from '../assets/projects';
import { Header, Footer } from './global/index';
import Layout from './layout/Layout';
import Jumbotron from './title/Title';
import ProjectPanels from './project-panels/ProjectPanels';

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
                <Layout>
                    <ProjectPanels projects={projects} />
                </Layout>
                <Footer />
            </div >
        </AppStyle>
    );
};

render(<App />, document.getElementById("root"));