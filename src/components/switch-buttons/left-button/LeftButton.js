import React from 'react';
import LeftButtonStyles from './LeftButton.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const LeftButton = () => {
    return (
        <LeftButtonStyles>
            <div className="left-button">
                <FontAwesomeIcon icon={faChevronCircleLeft} size={"2x"} />
            </div>
        </LeftButtonStyles>
    );
}

export default LeftButton;