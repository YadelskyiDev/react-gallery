import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Arrow } from './Arrow';
import { Slide } from './Slide';
import { SliderWrapper } from './StyledSlider';

const getWidth = () => document.documentElement.clientWidth;
const halfWidth = Math.round(getWidth() / 2);

export const Slider = props => {
    const [state, setState] = useState({
        autoPlayAvailable: true,
        activeSlide: 0,
        translate: 0,
        slideTranslate: 0,
        transition: 0.45,
        startX: 0,
        clickDown: false,
        deltaX: 0,
    })

    const [renderTimeout, setRenderTimeout] = useState(false);

    const { autoPlay, slides } = props;
    const { translate, slideTranslate, transition, activeSlide, startX, clickDown, deltaX, autoPlayAvailable } = state;
   
    const autoPlayRef = useRef();
    const swipeRef = useRef(null);

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        }
        if(autoPlay !== null && autoPlayAvailable){
            const interval = setInterval(play, autoPlay * 1000)
            return () => clearInterval(interval)
        }
    }, [autoPlay, autoPlayAvailable])

    const nextSlide = useCallback(stateReset => {
        if(activeSlide === slides.length - 1) {
            return setState({
                ...state,
                ...stateReset,
                translate: 0,
                slideTranslate: 0,
                activeSlide: 0,
            })
        }
        const translate = (activeSlide + 1) * getWidth()
        setState({
            ...state,
            ...stateReset,
            activeSlide: activeSlide + 1,
            translate,
            slideTranslate: translate
        })
    },[activeSlide, slides.length, state])


    const prevSlide = useCallback(stateReset => {
        if(activeSlide === 0){
            const translate = (slides.length - 1) * getWidth()

            return setState({
                ...state,
                ...stateReset,
                translate,
                slideTranslate: translate,
                activeSlide: slides.length - 1
            })
        }

        const translate = (activeSlide - 1) * getWidth()
        setState({
            ...state,
            ...stateReset,
            activeSlide: activeSlide - 1,
            translate,
            slideTranslate: translate
        })
    },[activeSlide, slides.length, state])
 


    const mouseDownHandler = useCallback(e => {
        if(startX === 0){
            return setState({
                ...state,
                startX: e.screenX,
                clickDown: true,
                autoPlayAvailable: false,
            })
        }else{
            resetEvents(e)
        }
   
    },[state, startX])
     
    const mouseMoveHandler = useCallback (e => {
        if(clickDown && !renderTimeout && startX !== 0){
            const delta = e.screenX - startX
            window.setTimeout(() => {
                setRenderTimeout(false)
            }, 100);
            setRenderTimeout(true)
            setState({
                ...state,
                deltaX: delta,
                slideTranslate: translate - delta
            }) 
        }else{
            resetEvents(e)
        }
    }, [state, translate, clickDown, startX, renderTimeout])
    

    const mouseUpHandler = useCallback(e => {
      
        const stateReset = {
            clickDown: false,
            startX: 0,
            deltaX: 0,
            autoPlayAvailable: true,
            slideTranslate: translate
        }
        
        if(deltaX !== 0){
            if(deltaX >= halfWidth && deltaX > 500){
                prevSlide(stateReset)
            }
            else if(deltaX <= -halfWidth && deltaX < 500){
                nextSlide(stateReset)
            } else {
                resetEvents(e)
                return setState({
                    ...state,
                    ...stateReset,
                })
            }
        }
    }, [deltaX, nextSlide, prevSlide, state, translate])

    const resetEvents = event => {
        event.stopPropagation()
        event.preventDefault()
    }

    useEffect(()=>{
        const el = swipeRef.current;  

        if(!clickDown){
            el.addEventListener('mousedown', mouseDownHandler)
            el.removeEventListener('mousemove', mouseMoveHandler)
            el.removeEventListener('mouseup', mouseUpHandler)
        }else{
            el.removeEventListener('mousedown', mouseDownHandler)
            el.addEventListener('mousemove', mouseMoveHandler)
            el.addEventListener('mouseup', mouseUpHandler)
        }
        
        return () => {
            el.removeEventListener('mousedown', mouseDownHandler)
            el.removeEventListener('mousemove', mouseMoveHandler)
            el.removeEventListener('mouseup', mouseUpHandler)
        }
    },[swipeRef, clickDown, mouseDownHandler,  mouseUpHandler, mouseMoveHandler])

    const styles = {
        display:`flex`,
        transform: `translateX(-${slideTranslate}px)`,
        height: `100%`,
        width: `${getWidth() * slides.length}px`,
        transition: `transform ease-out ${transition}s`
    }



    return(
        <SliderWrapper>
            {/* <SliderContent
                translate={slideTranslate}
                transition={transition}
                width={getWidth() * slides.length}
                > */}
                <div  ref={swipeRef} style={styles}>
                    {
                        slides.map((slide, i) => <Slide key={slide + i} content={slide}/>)
                    }
                </div>
            {/* </SliderContent> */}
            <Arrow direction='right' handleClick={nextSlide}/>
            <Arrow direction='left' handleClick={prevSlide} />
        </SliderWrapper>
    )
}

Slider.defaultProps = {
    slides: [],
    autoPlay: null
}