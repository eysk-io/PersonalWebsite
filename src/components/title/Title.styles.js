import styled from 'styled-components';
import profile from '../../assets/ProfilePic.jpg'

const TitleStyles = styled.div`
    #avatar {
        margin-top: 125px;
        background-image: url(${profile});
        background-size: cover;
        height: 250px;
        width: 250px;
        border: rgb(44, 45, 45) solid 2px;
        border-radius: 50%;
        display: block;
    }

    .bio {
        font-size: 18px;
        font-weight: 400;
        line-height: 2;
        font-family: "Roboto", sans-serif;
        max-width: 400px;
        margin-top: 30px;
        border-bottom: black 1px solid;
        padding-bottom: 40px;
        letter-spacing: 4px;
    }
`;

export default TitleStyles;