import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Arrow } from './Arrow';
import { Slide } from './Slide';
import { SliderWrapper } from './StyledSlider';

const getWidth = () => document.documentElement.clientWidth;
const halfWidth = Math.round(getWidth() / 2);

export const Slider = props => {
    const { autoPlay, slides } = props;
    const firsSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[2]

    const [state, setState] = useState({
        autoPlayAvailable: true,
        activeSlide: 0,
        translate: getWidth(),
        slideTranslate: 0,
        transition: 0.45,
        startX: 0,
        clickDown: false,
        deltaX: 0,
        _slides: [firsSlide, secondSlide, lastSlide]
    })

    const [renderTimeout, setRenderTimeout] = useState(false);

   
    const { translate, slideTranslate, _slides, transition, activeSlide, startX, clickDown, deltaX, autoPlayAvailable } = state;
   
    const autoPlayRef = useRef();
    const swipeRef = useRef(null);

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        }
        let interval = null
        if(autoPlay !== null && autoPlayAvailable){
            interval = setInterval(play, autoPlay * 1000)
            return () => clearInterval(interval)
        }
    }, [autoPlay, autoPlayAvailable])

    const nextSlide = useCallback(stateReset => {
        if(activeSlide === _slides.length - 1) {
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
    },[activeSlide, _slides.length, state])


    const prevSlide = useCallback(stateReset => {
        if(activeSlide === 0){
            const translate = (_slides.length - 1) * getWidth()

            return setState({
                ...state,
                ...stateReset,
                translate,
                slideTranslate: translate,
                activeSlide: _slides.length - 1
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
    },[activeSlide, _slides.length, state])
 


    const mouseDownHandler = useCallback(e => {
        if(startX === 0){
            document.removeEventListener('mousemove', resetEvents(e))
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
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
        }else{
            el.removeEventListener('mousedown', mouseDownHandler)
            document.addEventListener('mousemove', mouseMoveHandler)
            document.addEventListener('mouseup', mouseUpHandler)
        }
        
        return () => {
            el.removeEventListener('mousedown', mouseDownHandler)
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
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
                        _slides.map((_slide, i) => <Slide key={_slide + i} content={_slide}/>)
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