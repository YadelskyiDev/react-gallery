import React from 'react';
import styled from 'styled-components';

const StyledSlide = styled.div`
    height: 100%;
    width:100%;
    background-image: url('${content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const Slide = ({ content }) => (  
    <div>
        <StyledSlide/>
    </div>  
)

