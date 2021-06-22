import styled from 'styled-components';
import Mavic from '../../Assets/Images/DJI_MAvic_Mini_01.jpg';
import Evo from '../../Assets/Images/evoll_pro.jpg';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    position:relative;
    height: 100vh;
    background: #faf7f6;
    padding: 0 10%;

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
    color: #6e6e6e;
    margin: 40px 0;
`

export const Line = styled.div`
    position:absolute;
    bottom: 0;
    margin: 0 auto;
    width: 80%;
    height: 1px;
    background: #BDBDBD;
    margin-bottom: 40px;
`

export const ImgPro = styled.div`
    background-image: url("${Evo}");
    min-height: 80%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`