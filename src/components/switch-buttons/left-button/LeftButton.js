import React from 'react';
import LeftButtonStyles from './LeftButton.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const LeftButton = ({ onButtonClick }) => {
    return (
        <LeftButtonStyles>
            <div className="left-button">
                <a href="#" onClick={onButtonClick} >
                    <FontAwesomeIcon icon={faChevronCircleLeft} size={"2x"} />
                </a>
            </div>
        </LeftButtonStyles >
    );
}

export default LeftButton;