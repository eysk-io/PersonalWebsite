import React from 'react';

const Project = ({ name, img, url }) => {
    return (
        <div className="project">
            {`${name}, ${img}, ${url}`}
        </div>
    );
}

export default Project;