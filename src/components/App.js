import React from 'react';
import { render } from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import projects from '../assets/projects';
import { Header, Footer } from './global/index';
import Layout from './layout/Layout';
import Jumbotron from './title/Title';
import ProjectPanels from './project-panels/ProjectPanels';

const App = () => {
    return (
        <div className="root">
            <Header projects={projects} />
            <Jumbotron />
            <Layout>
                <ProjectPanels projects={projects} />
            </Layout>
            <Footer />
        </div >
    );
};

render(<App />, document.getElementById("root"));