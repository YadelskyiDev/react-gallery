import styled from 'styled-components';

export const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
`
// export const SliderContent = styled(({ props, ...rest }) => <div {...rest} />)`
//     height: 100%;
//     width: 100%;
//     & > div {
//     height: 100%;
//     width: ${props => props.width}px;
//     transform: translateX(-${props => props.translate}px);
//     transition: transform ease-out ${props => props.transition}s;
//     display:flex;
//     }
// `