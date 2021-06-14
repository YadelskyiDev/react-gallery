import styled from 'styled-components';

export const StyledGroup = styled.div`
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const GroupItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80%;
    height: 25em;
    transition:  all 1s ease-out;
    &:hover{
        transform: scale(0.8)
    }
`

export const GroupImg = styled.img`
    filter: blur(.3rem);
    width: 100%;
    height: 100%;
`

export const GroupTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background:  rgba(66, 65, 65, .7);
    color: white;
    z-index: 3;
    left: 0;
    font-size: 30px;
    text-transform: uppercase;
    filter: blur(0);
    &:hover{
        visibility: visible;
    }
`

export const Line = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 1px;
    background: #BDBDBD;
    margin-bottom: 40px;
`