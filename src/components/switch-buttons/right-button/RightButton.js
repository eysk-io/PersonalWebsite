import React from 'react';
import RightButtonStyles from './RightButton.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const RightButton = ({ onButtonClick }) => {
    return (
        <RightButtonStyles>
            <div className="right-button">
                <a href="#" onClick={onButtonClick} >
                    <FontAwesomeIcon icon={faChevronCircleRight} size={"2x"} />
                </a>
            </div>
        </RightButtonStyles >
    );
}

export default RightButton;