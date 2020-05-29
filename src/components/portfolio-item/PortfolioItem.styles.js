import styled from 'styled-components';

const PortfolioItemStyles = styled.div`
    @media screen and (max-width: 500px) {
        .portfolio-item {
            box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
            margin: auto;
            margin-bottom: 50px;
            max-width: 400px;
            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 4px 20px 0 rgba(0,0,0,0.12);
            }
        }

        .card-header {
            font-size: 14px;
            margin-bottom: 25px;
            background-color: #FFF;
            letter-spacing: 3px;
        }

        .MuiCardContent-root {
            font-family: "Roboto", sans-serif;
        }
    }

    @media screen and (min-width: 501px) {
        .portfolio-item {
            box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
            margin: auto;
            margin-bottom: 50px;
            max-width: 400px;
            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 4px 20px 0 rgba(0,0,0,0.12);
            }
        }

        .MuiCardMedia-root {
            height: 250px;
            border-radius: 3px;
            overflow: hidden;
            overflow-x: hidden;
            overflow-y: hidden;
            margin: auto;
        }

        .MuiCardContent-root {
            font-family: "Roboto", sans-serif;
        }

        .card-header {
            font-size: 18px;
            margin-bottom: 25px;
            background-color: #FFF;
            letter-spacing: 4px;
        }

        .company-name {
            font-style: italic;
            margin-top: 8px;
        }
    }
`;

export default PortfolioItemStyles;