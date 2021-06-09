import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Arrow } from './Arrow';
import { Slide } from './Slide';
import { SliderWrapper } from './StyledSlider';

const getWidth = () => window.innerWidth;
const halfWidth = Math.round(getWidth() / 2);

export const Slider = props => {
    const { autoPlay, slides } = props;
    const maxSlideIndex = slides.length

    const [state, setState] = useState({
        autoPlayAvailable: true,
        translate: 0,
        slideTranslate: getWidth(),
        transition: 0.45,
        startX: 0,
        clickDown: false,
        deltaX: 0,
        _slides: [slides[maxSlideIndex-1], ...slides, slides[0]]
    })

    const [renderTimeout, setRenderTimeout] = useState(false);

   
    const { translate, slideTranslate, _slides, transition, startX, clickDown, deltaX, autoPlayAvailable } = state;
   
    const autoPlayRef = useRef();
    const swipeRef = useRef(null);
    const activeSlide = useRef(1);
    useEffect(() => {
        autoPlayRef.current = next;
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

    const next = useCallback(() => {
        console.log(maxSlideIndex)
       
        activeSlide.current++
     
        console.log(activeSlide.current)
        let translate = activeSlide.current * getWidth()
        if(activeSlide.current >= maxSlideIndex + 1) {
            translate = getWidth()
            setState({
                ...state,
                translate,
                slideTranslate: translate
            })
            activeSlide.current = 1
            setTimeout(() => {
                setState({
                    ...state,
                    translate,
                    slideTranslate: translate
                })
            })
        } else {
            setState({
                ...state,
                translate,
                slideTranslate: translate,
            })
        }
    },[activeSlide, state, maxSlideIndex])


    const prev = useCallback(() => {
        activeSlide.current--
        let translate = activeSlide.current * getWidth()
        console.log(activeSlide.current);
        if(activeSlide.current === 1) {
            translate = (maxSlideIndex + 1) * getWidth()
            setState({
                ...state,
                translate,
                slideTranslate: translate,
            })
            activeSlide.current = maxSlideIndex + 1
            setTimeout(() => {
                setState({
                    ...state,
                    translate,
                    slideTranslate: translate
                })
                
            })
        } else {
            if(activeSlide.current === 0){
                activeSlide.current = maxSlideIndex 
            }
        
            setState({
                ...state,
                translate,
                slideTranslate: translate,
            })
        }
    },[activeSlide, state, maxSlideIndex])


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
            autoPlayAvailable: false,
            slideTranslate: translate
        }
        
        if(deltaX !== 0){
            if(deltaX >= halfWidth && deltaX > 500){
                prev({ stateReset })
            }
            else if(deltaX <= -halfWidth && deltaX < 500){
                next({ stateReset} )
            } else {
                return setState({
                    ...state,
                    ...stateReset,
                })
            }
        }
    }, [deltaX, next, prev, state, translate])

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
        width: `${getWidth() * _slides.length}px`,
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
            <Arrow direction='right' handleClick={next}/>
            <Arrow direction='left' handleClick={prev} />
        </SliderWrapper>
    )
}

Slider.defaultProps = {
    slides: [],
    autoPlay: null
}