import React from 'react';
import rightArrow from '../../Images/arrow-right.svg';
import leftArrow from '../../Images/arrow-left.svg';
import {StyledArrow} from './StyledArrow';

export const Arrow = ( { direction, handleClick }) => (
    <StyledArrow direction={direction}>
        {direction === 'right' ? <img src={rightArrow}/> : <img src={leftArrow}/>}
    </StyledArrow> 
)