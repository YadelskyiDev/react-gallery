import styled from 'styled-components';

export const StyledSlide  = styled(({ content, ...rest }) => <div {...rest} />)`
    height: auto;
    width:100%;
    background-image: url(${({content}) => content});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;`