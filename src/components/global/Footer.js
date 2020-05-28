import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { FooterStyles } from './global-styles/global.styles';

const Footer = () => {
    return (
        <FooterStyles>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-text">
                        Find me at other places too! -
                    </div>
                    <div className="footer-icons">
                        <a href="https://linkedin.com/in/eykim195/" target="_blank">
                            <FontAwesomeIcon href="" className="social-media" size={"3x"} id="linkedin" icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/eyskim" target="_blank">
                            <FontAwesomeIcon className="social-media" size={"3x"} id="github" icon={faGithub} />
                        </a>
                        <a href="https://gitlab.com/eyskim" target="_blank">
                            <FontAwesomeIcon href="" className="social-media" size={"3x"} id="gitlab" icon={faGitlab} />
                        </a>
                    </div>
                </div>
            </div>
        </FooterStyles>
    );
}

export default Footer;