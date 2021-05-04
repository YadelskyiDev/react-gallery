import styled from 'styled-components';

export const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
`
export const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display:flex;
`