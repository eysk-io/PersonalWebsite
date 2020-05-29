import React from 'react';
import { render } from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import portfolio from '../assets/portfolio';
import { Header, Footer } from './global/index';
import Title from './title/Title';
import Portfolio from './portfolio/Portfolio';
import background from '../assets/wood.jpg';

const AppStyle = styled.div`
    .app {
        background: url(${background}) no-repeat fixed;
        background-size: cover;
    }
    a {
        text-decoration: none;
    }
`;

const App = () => {
    return (
        <AppStyle>
            <div className="app">
                <Header />
                <Title />
                <Portfolio portfolio={portfolio} />
                <Footer />
            </div >
        </AppStyle>
    );
};

render(<App />, document.getElementById("root"));