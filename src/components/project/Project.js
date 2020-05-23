import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .project {
        border-bottom: 1px black solid;
        padding-bottom: 15px;
        max-width: 650px;
        margin: auto;
    }
    a.project-item {
        text-align: center;
        max-width: 500px;
        max-height: 500px;
        margin: 40px;
        border-radius: 3px;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        text-decoration: none;
    }
    a:hover {
        opacity: 0.7;
    }
    a {
        color: #212529;
        background-color: transparent;
        font-family: "Open Sans", sans-serif;
        scroll-behavior: smooth;
        box-sizing: border-box;
    }
    .project-desc {
        opacity: 0.5;
    }

    .project-img img {
        height: 100%;
        width: 100%;
        max-width: 500px;
        max-height: 500px;
        border-radius: 3px;
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: hidden;
    }
`;


const Project = ({ name, img, url, desc }) => {
    return (
        <Styles>
            <div className="project">
                <a
                    className="project-item"
                    target="_blank"
                    href={url}
                >
                    <div className="project-name">
                        {name}
                    </div>
                    <div className="project-desc">
                        {desc}
                    </div>
                    <div className="project-img">
                        <img src={img} />
                    </div>
                </a>
            </div>
        </Styles>
    );
}

export default Project;