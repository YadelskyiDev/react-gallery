import React, { useState } from 'react';
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
            <SliderContent trans>Slider
                translate={translate}
                transition={transition}
                width={getWidth()}
                {
                    props.slides.map(slide => <Slide key={slide} content={slide}/>)
                }
            </SliderContent>
        </SliderWrapper>
    )
}

export default Slider;