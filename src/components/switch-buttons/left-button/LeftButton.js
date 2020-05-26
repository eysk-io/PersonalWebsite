import React, { useState, useEffect } from 'react';
import LeftButtonStyles from './LeftButton.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const LeftButton = ({ onButtonClick }) => {
    // const titles = ["Projects", "Dev Experience"];
    // const [clickNumber, setClickNumber] = useState(1);
    // const [title, setTitle] = useState("Projects");

    // function onButtonClick(e) {
    //     e.preventDefault();
    //     setClickNumber(calculateTitlesIndex(clickNumber));
    //     console.log(clickNumber);
    //     setTitle(titles[clickNumber]);
    //     console.log(title);
    // }

    // function calculateTitlesIndex(clickNumber) {
    //     clickNumber++;
    //     return clickNumber % titles.length;
    // }

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