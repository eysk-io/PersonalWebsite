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

export { HeaderStyles };