import styled from "styled-components";

export const StyledArrow = styled(({ direction, ...rest }) => <div {...rest}/>)`
    position: absolute;
    background: #fff;
    border-radius: 50%;
    opacity: 0.6;
    top: 50%;
    ${({direction}) => direction === 'right' ? 'right: 25px' : 'left: 25px'};
    cursor: pointer;
    transition: transform ease-in 0.1s;
    &:hover{
        transform: scale(1.1);
        opacity: 0.9;
        fill: #ff0000;
    }
    img{
        opacity:1;
        &:focus{
            outline: 0;
        }
    }
`