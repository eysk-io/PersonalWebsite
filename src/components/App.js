import React from 'react';
import { render } from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Header } from './global/index';
import Layout from './layout/Layout';
import Jumbotron from './title/Title';
import ProjectPanels from './project-panels/ProjectPanels';

const App = () => {
    return (
        <div className="root">
            <Header />
            <Jumbotron />
            <Layout>
                This is my website
                <ProjectPanels />
            </Layout>
            {/* <Footer /> */}
        </div >
    );
};

render(<App />, document.getElementById("root"));