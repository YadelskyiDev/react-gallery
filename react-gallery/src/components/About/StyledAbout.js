import styled from 'styled-components';
import Mavic from '../../Assets/Images/DJI_MAvic_Mini_01.jpg';
import Evo from '../../Assets/Images/evoll_pro.jpg';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    position:relative;
    height: 100vh;
    padding: 0 10%;
    @media(max-width: 786px){
        padding: 0;
    }
`

export const ImgMavic = styled.div`
    background-image: url("${Mavic}");
    min-height: 80%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`

export const DroneDescription = styled.p`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #6e6e6e;

    @media(max-width: 786px){
       margin: 0;
    }
`

export const Line = styled.div`
    position:absolute;
    bottom: 0;
    margin: 0 auto;
    width: 80%;
    height: 1px;
    background: #BDBDBD;
    margin-bottom: 40px;

    @media(max-width: 786px){
        display: none;
    }
`

export const ImgPro = styled.div`
    background-image: url("${Evo}");
    min-height: 80%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`