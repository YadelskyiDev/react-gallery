import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10em;
    background: #DFE1E3;
    margin-top: auto;
    @media(max-width: 786px){
       flex-direction: column;
    }
`

export const StyledContact = styled.div`
    position: absolute;
    width: 40%;
    height: 4em;
    background: #fff;
    @media(max-width: 786px){
        width: 100%;
        height: 20vh;
        position: relative;
        background: none;
    }
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
   
    li{
        list-style: none;
    }
    img{
        transition:  all .4s ease-in-out;
    }
    @media (hover: hover) {
    img:hover {  
        transform: scale(1.2) 
    }
}

    @media(max-width: 786px){
        justify-content: space-evenly;
        margin-top: 40px;
        width: 100%;
        margin-left: 0;
    }
`

export const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: #6e6e6e;
    
    p:first-child{
        font-size: 1rem;
        top: 0;
    }
    p{
        position: relative;
        top: 33%;
        font-size: 10px;
    }
    @media(max-width: 786px){
        margin-top: 0;
        width: 100%;
        margin-left: 0;
        text-align: center;
        p{
            top: 0;
        }
    }
`