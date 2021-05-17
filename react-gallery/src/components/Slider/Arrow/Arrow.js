import React, { useState } from 'react';
// import rightArrow from '../../../Images/arrow-right.svg';
// import leftArrow from '../../../Images/arrow-left.svg';
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";
import {StyledArrow} from '../StyledArrow';

export const Arrow = ( { direction, handleClick }) => {
    const [color, setColor] = useState('#888')
    const onHover = () => {
        setColor('#000')
    }
    const unsetHover = () => {
        setColor('#888')
    }
    return (
        <StyledArrow direction={direction}  onClick={handleClick} onMouseEnter={onHover} onMouseLeave={unsetHover}>
            {direction === 'right' ? <RightArrow color={color} /> : <LeftArrow color={color} />}
        </StyledArrow>
    )
}