import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Styles = styled.div`
    .footer {
        background: linear-gradient(to right, #292b2c, #000000);
        height: 60px;
    }
`;

const Footer = () => {
    return (
        <Styles>
            <div className="footer">
            </div>
        </Styles>
    );
}

export default Footer;