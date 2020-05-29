import styled from 'styled-components';

const PortfolioTitleStyles = styled.div`
    @media screen and (min-width: 751px) {
        .portfolio-title {
            color: rgb(44, 45, 45);
            font-family: "Roboto", sans-serif;
            font-size: 50px;
            line-height: 40px;
            font-weight: 400;
            letter-spacing: 12px;
            text-transform: none;
            margin: auto;
            margin-bottom: 100px;
        }
    }
    @media screen and (min-width: 651px) {
        .portfolio-title {
            color: rgb(44, 45, 45);
            font-family: "Roboto", sans-serif;
            font-size: 30px;
            line-height: 40px;
            font-weight: 400;
            letter-spacing: 8px;
            text-transform: none;
            margin: auto;
            margin-bottom: 100px;
        }
    }
    @media screen and (max-width: 650px) {
        .portfolio-title {
            color: rgb(44, 45, 45);
            font-family: "Roboto", sans-serif;
            font-size: 20px;
            line-height: 40px;
            font-weight: 400;
            letter-spacing: 4px;
            text-transform: none;
            margin: auto;
            margin-bottom: 40px;
        }
    }
`;

export default PortfolioTitleStyles;