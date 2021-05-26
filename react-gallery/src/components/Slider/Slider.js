import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Arrow } from './Arrow';
import { Slide } from './Slide';
import { SliderWrapper, SliderContent } from './StyledSlider';

const getWidth = () => window.innerWidth;

export const Slider = props => {
    const [state, setState] = useState({
        autoPlayAvailable: true,
        activeIndex: 0,
        translate: 0,
        slideTranslate: 0,
        transition: 0.45,
        startX: 0,
        clickDown: false,
        deltaX: 0
    })

    const swipeRef = useRef(null);

  
    const { translate, slideTranslate, transition, activeIndex, startX, clickDown, deltaX, autoPlayAvailable } = state;
    const autoPlayRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }
        if(props.autoPlay !== null){
            const interval = setInterval(() => {
                if(autoPlayAvailable) {
                    play()
                }
            }, props.autoPlay * 1000)
            return () => clearInterval(interval)
        }
    }, [props.autoPlay, autoPlayAvailable])

    const nextSlide = useCallback(stateReset => {
        if(activeIndex === props.slides.length - 1) {
            return setState({
                ...state,
                ...stateReset,
                translate: 0,
                slideTranslate: 0,
                activeIndex: 0
            })
        }
        const translate = (activeIndex + 1) * getWidth()
        setState({
            ...state,
            ...stateReset,
            activeIndex: activeIndex + 1,
            translate,
            slideTranslate: translate
        })
    },[activeIndex, props.slides.length, state])


    const prevSlide = useCallback(stateReset => {
        if(activeIndex === 0){
            const translate = (props.slides.length - 1) * getWidth()

            return setState({
                ...state,
                ...stateReset,
                translate,
                slideTranslate: translate,
                activeIndex: props.slides.length - 1,
            })
        }

        const translate = (activeIndex - 1) * getWidth()
        setState({
            ...state,
            ...stateReset,
            activeIndex: activeIndex - 1,
            translate,
            slideTranslate: translate
        })
    },[activeIndex, props.slides.length, state])
 


    const mouseDownHandler = useCallback(e => {
        return setState({
            ...state,
            startX: e.clientX,
            clickDown: true,
            autoPlayAvailable: false,
        })
    },[state])
     
    const mouseMoveHandler = useCallback (e => {
        if(clickDown === true){
            const delta = e.clientX - startX
            setState({
                ...state,
                deltaX: delta,
                slideTranslate: translate - delta
            }) 
        }
    }, [state, translate, clickDown, startX])
    

    const mouseUpHandler = useCallback(e => {
        const halfWidth = getWidth() / 2
        const stateReset = {
            startX: null,
            deltaX: 0,
            clickDown: false,
            autoPlayAvailable: true,
            slideTranslate: translate
        }
        if(deltaX > halfWidth){
            prevSlide(stateReset)
        }
        else if(deltaX < -halfWidth){
            nextSlide(stateReset)
        } else {
            return setState({
                ...state,
                ...stateReset,
            })
        }
    }, [deltaX, nextSlide, prevSlide, state, translate])


    useEffect(()=>{
        const el = swipeRef.current;
        el.removeEventListener('mousemove', mouseMoveHandler)
        el.removeEventListener('mousedown', mouseDownHandler)
        el.removeEventListener('mouseup', mouseUpHandler)

        el.addEventListener('mousedown', mouseDownHandler)
        
        if(clickDown === true){
            el.addEventListener('mousemove', mouseMoveHandler)
            el.addEventListener('mouseup', mouseUpHandler)
        }
        return () => {
            el.removeEventListener('mousemove', mouseMoveHandler)
            el.removeEventListener('mousedown', mouseDownHandler)
            el.removeEventListener('mouseup', mouseUpHandler)
        }
    },[swipeRef, mouseDownHandler,  mouseUpHandler,mouseMoveHandler, clickDown])

    // const styles = {
    //     transform: `translateX(-${slideTranslate}px)`
    // transition: transform ease-out .45s;
    // }

    return(
        <SliderWrapper>
            <SliderContent
                translate={slideTranslate}
                transition={transition}
                width={getWidth() * props.slides.length}>
                <div  ref={swipeRef}>
                    {
                        props.slides.map((slide, i) => <Slide key={slide + i} content={slide}/>)
                    }
                </div>
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