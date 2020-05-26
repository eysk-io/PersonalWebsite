import React from 'react';
import RightButtonStyles from './RightButton.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const RightButton = () => {
    return (
        <RightButtonStyles>
            <div className="right-button">
                <FontAwesomeIcon icon={faChevronCircleRight} size={"2x"} />
            </div>
        </RightButtonStyles>
    );
}

export default RightButton;