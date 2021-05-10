import React, { useState } from 'react';
import { Arrow } from './Arrow';
import { Slide } from './Slide';
import { SliderWrapper, SliderContent } from './StyledSlider';

const Slider = props => {
    const getWidth = () => window.innerWidth;

    const [state, setState] = useState({
        translate: 0,
        transition: 0.45
    })

    const { translate, transition} = state;
    console.log(props)
    return(
        <SliderWrapper>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * props.slides.length}>
                {
                    props.slides.map(slide => <Slide key={slide} content={slide}/>)
                }
            </SliderContent>
            <Arrow direction='right'/>
            <Arrow direction='left'/>
        </SliderWrapper>
    )
}

export default Slider;