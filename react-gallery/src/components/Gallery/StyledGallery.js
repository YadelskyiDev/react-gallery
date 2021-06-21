import styled from 'styled-components';

export const StyledGroup = styled.section`
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
    transition:  all .3s ease-out;
    &:hover{
        transform: scale(.9)
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
`

export const VideoTextBlock = styled.div`
    color:#6e6e6e;
    text-align: center;
    line-height: 3em;
    width: 50%;
    margin-left: 25px;
`