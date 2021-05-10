import styled from "styled-components";

export const StyledArrow = styled(({ direction, ...rest }) => <div {...rest}/>)`
    position: absolute;
    top: 50%;
    ${({direction}) => direction === 'right' ? 'right: 25px' : 'left: 25px'};
    cursor: pointer;
    transition: transform ease-in 0.1s;
    &:hover{
        transform: scale(1.1);
    }
    img{
        &:focus{
            outline: 0;
        }
    }
`