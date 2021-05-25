import React, { useState, useEffect, useRef } from 'react';
import { Arrow } from './Arrow';
import { Slide } from './Slide';
import { SliderWrapper, SliderContent } from './StyledSlider';

const getWidth = () => window.innerWidth;

export const Slider = props => {
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        startX: 0,
        clickDown: false,
        clickUp: false,
        deltaX: 0
    })

    const swipeRef = useRef(null);
   
  
    const { translate, transition, activeIndex, startX, clickDown, deltaX } = state;
    const autoPlayRef = useRef()
    useEffect(() => {
        autoPlayRef.current = nextSlide;
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }
        if(props.autoPlay !== null){
            const interval = setInterval(play, props.autoPlay * 1000)
            return () => clearInterval(interval)
        }
    }, [props.autoPlay, translate])

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


    const mouseDownHandler = e => {
        return setState({
            ...state,
            startX: e.clientX,
            clickDown: true
        }) 
    }
    
    const  mouseMoveHandler = e => {
        if(clickDown === true){
            const delta = e.clientX - startX
            setState({
                ...state,
                deltaX: delta,
                translate: translate + delta
            }) 
        }
    }

    const mouseUpHandler = e => {
        console.log(state)
        const halfWidth = getWidth() / 2
            if(deltaX > halfWidth){
                nextSlide()
            }
            else if(deltaX < -halfWidth){
                prevSlide()
            }
            return setState({
                ...state,
                startX: null,
                clickDown: false,
            })
        }
      

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

        
    },[swipeRef, mouseDownHandler,  mouseUpHandler, mouseUpHandler, clickDown])

    return(
        <SliderWrapper>
            <SliderContent
                translate={translate}
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