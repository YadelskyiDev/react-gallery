import styled from 'styled-components';

const StyledSlide  = styled(({ ...content }) => <div {...content} />)`
   height: 100%;
    width:100%;
    background-image: url(${({content}) => content});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;`

export const Slide = ({ content }) => (    
    <StyledSlide content={content}/>
)