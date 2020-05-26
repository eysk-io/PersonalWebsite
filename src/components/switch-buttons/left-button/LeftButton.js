import React from 'react';
import LeftButtonStyles from './LeftButton.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const LeftButton = () => {
    function onButtonClick(e) {
        e.preventDefault();
    }

    return (
        <LeftButtonStyles>
            <div className="left-button">
                <a href="#" onClick={e => onButtonClick(e)} >
                    <FontAwesomeIcon icon={faChevronCircleLeft} size={"2x"} />
                </a>
            </div>
        </LeftButtonStyles >
    );
}

export default LeftButton;