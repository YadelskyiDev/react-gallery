import styled from 'styled-components';

export const ImageWrapper = styled.section`
    position: relative;
    display: grid;
    grid-template: repeat(1, 1fr) / repeat(4, 1fr);
    gap: 1em;
    padding: 1em 1em;
    z-index: 99;
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    transition:  all .3s ease-out;
    @media (hover: hover) and (pointer: fine) {
        :hover {transform: scale(1.1)}
    }
`