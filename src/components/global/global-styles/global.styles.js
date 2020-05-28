import styled from 'styled-components';

const HeaderStyles = styled.div`
    .navbar {
        background: rgb(44, 45, 45);
    }
    .header-name {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        font-size: 15px;
        line-height: 40px;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: none;
        margin: auto;
    }
    .header-sub {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        font-size: 12px;
        line-height: 30px;
        font-weight: 400;
        letter-spacing: 3px;
        text-transform: none;
        margin: auto;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    .container {
        max-width: 800px;
    }
`;

const FooterStyles = styled.div`
    .footer {
        background: rgb(44, 45, 45);
        min-height: 100px;
        font-family: 'Roboto', sans-serif;
        color: #fff;
        font-size: 12px;
        line-height: 30px;
        font-weight: 400;
        letter-spacing: 3px;
        text-transform: none;
        position: relative;
        padding: 15px;
    }

    .footer-content {
        max-width: 800px;
        margin: auto;
        text-align: center;
    }

    .footer-text {
        margin-top: 15px;
    }
    
    .social-media {
        margin: 15px;
    }

    #linkedin {
        color: #0e76a8;
    }
    #github {
        color: #6e5494;
    }
    #gitlab {
        color: #fa7035;
    }
`;

export { HeaderStyles, FooterStyles };