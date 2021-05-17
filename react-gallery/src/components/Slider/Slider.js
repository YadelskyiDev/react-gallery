import React, { useState, useEffect, useRef } from 'react';
import { Arrow } from './Arrow';
import { Slide } from './Slide';
import { SliderWrapper, SliderContent } from './StyledSlider';

const getWidth = () => window.innerWidth;

export const Slider = props => {
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    })

    const { translate, transition, activeIndex} = state;
    const autoPlayRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    })


    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }
        const interval = setInterval(play, props.autoPlay * 1000)
    }, [])

    const nextSlide = () => {
        if(activeIndex === props.slides.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()  
        })
    }

    const prevSlide = () => {
        if(activeIndex === 0){
            return setState({
                ...state,
                translate:(props.slides.length - 1) * getWidth(),
                activeIndex: props.slides.length - 1,
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
    }

    return(
        <SliderWrapper>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * props.slides.length}>
                {
                    props.slides.map((slide, i) => <Slide key={slide + i} content={slide}/>)
                }
            </SliderContent>
            <Arrow direction='right' handleClick={nextSlide}/>
            <Arrow direction='left' handleClick={prevSlide} />
        </SliderWrapper>
    )
}

Slider.defaultProps = {
    slides: [],
    autoPlay: null
}