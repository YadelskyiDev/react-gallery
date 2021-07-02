import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledGroup = styled.section`
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 1em;
    justify-items: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin: 1.5em 0;
    @media(max-width: 786px){
        grid-template-columns: none;
        gap: 40px 0;
        margin-top: 40px;
    }
`

export const GroupItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80%;
    height: 25em;
    transition:  all .3s ease-out;

    @media (hover: hover) and (pointer: fine) {
        :hover {transform: scale(.9)}
    }
    
    @media(max-width: 786px){
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
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
    color: #fff;
    z-index: 3;
    left: 0;
    font-size: 30px;
    text-transform: uppercase;
    filter: blur(0);
    :hover{
        visibility: visible;
    }
`

export const Line = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 1px;
    background: #BDBDBD;
    margin-bottom: 40px;
    @media(max-width: 786px){
        display: none;
    }
`

export const VideoWrapper = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin-bottom: 40px;
`

export const Video = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    background: #faf7f6;
    padding: 10%;
    @media(max-width: 786px){
        width: 100%;
        flex-wrap: wrap;
    }
`

export const VideoTextBlock = styled.div`
    color:#6e6e6e;
    text-align: center;
    line-height: 3em;
    width: 50%;
    margin-left: 25px;
    @media(max-width: 786px){
        margin-top: 40px;
        width: 100%;
        margin-left: 0;
    }
`