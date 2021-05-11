import React from 'react';
import rightArrow from '../../Images/arrow-right.svg';
import leftArrow from '../../Images/arrow-left.svg';
import {StyledArrow} from './StyledArrow';

export const Arrow = ( { direction, handleClick }) => (
    <StyledArrow direction={direction}  onClick={handleClick}>
        {direction === 'right' ? <img src={rightArrow} alt="right-arrow"/> : <img src={leftArrow} alt="left-arrow"/>}
    </StyledArrow> 
)