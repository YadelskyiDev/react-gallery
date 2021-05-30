import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Arrow } from './Arrow';
import { Slide } from './Slide';
import { SliderWrapper, SliderContent } from './StyledSlider';

const getWidth = () => window.innerWidth;
const halfWidth = getWidth() / 2;

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

    const [renderTimeout, setRenderTimeout] = useState(false)

    const swipeRef = useRef(null);

    const { autoPlay, slides } = props;
    const { translate, slideTranslate, transition, activeIndex, startX, clickDown, deltaX, autoPlayAvailable } = state;
    const autoPlayRef = useRef();

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        }
        if(autoPlay !== null){
            const interval = setInterval(() => {
                if(autoPlayAvailable) {
                    play();
                }
            }, autoPlay * 1000)
            return () => clearInterval(interval)
        }
    }, [autoPlay, autoPlayAvailable])

    const nextSlide = useCallback(stateReset => {
        if(activeIndex === slides.length - 1) {
            return setState({
                ...state,
                ...stateReset,
                translate: 0,
                slideTranslate: 0,
                activeIndex: 0,
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
    },[activeIndex, slides.length, state])


    const prevSlide = useCallback(stateReset => {
        if(activeIndex === 0){
            const translate = (slides.length - 1) * getWidth()

            return setState({
                ...state,
                ...stateReset,
                translate,
                slideTranslate: translate,
                activeIndex: slides.length - 1
            })
        }

        const translate = (activeIndex - 1) * getWidth()
        setState({
            ...state,
            ...stateReset,
            activeIndex: activeIndex - 1,
            translate: translate,
            slideTranslate: translate
        })
    },[activeIndex, slides.length, state])
 


    const mouseDownHandler = useCallback(e => {
        if(startX === 0){
            return setState({
                ...state,
                startX: e.screenX,
                clickDown: true,
                autoPlayAvailable: false,
            })
        }else{
            e.stopPropagation()
            e.preventDefault()
        }
   
    },[state, startX])
     
    const mouseMoveHandler = useCallback (e => {
        if(clickDown && !renderTimeout && startX !== 0){
            const delta = e.screenX - startX
            window.setTimeout(() => {
                setRenderTimeout(false)
            }, 50);
            setRenderTimeout(true)
            setState({
                ...state,
                deltaX: delta,
                slideTranslate: translate - delta
            }) 
        }else{
            e.stopPropagation()
            e.preventDefault()
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
            if(deltaX >= halfWidth){
                prevSlide(stateReset)
            }
            else if(deltaX <= -halfWidth){
                nextSlide(stateReset)
            } else {
                e.stopPropagation()
                e.preventDefault()
                return setState({
                    ...state,
                    ...stateReset,
                })
            }
        }
    }, [deltaX, nextSlide, prevSlide, state, translate])


    useEffect(()=>{
        const el = swipeRef.current;  
        el.addEventListener('mousedown', mouseDownHandler)
        
        if(clickDown){
            document.addEventListener('mousemove', mouseMoveHandler)
            document.addEventListener('mouseup', mouseUpHandler)
        }else{
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
        }
        
        return () => {
            el.removeEventListener('mousedown', mouseDownHandler)
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
          
        }
    },[swipeRef, clickDown, mouseDownHandler,  mouseUpHandler, mouseMoveHandler])

    const styles = {
        transform: `translateX(-${slideTranslate}px)`,
        height: `100%`,
        width: `${getWidth() * slides.length}px`,
        display:`flex`,
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