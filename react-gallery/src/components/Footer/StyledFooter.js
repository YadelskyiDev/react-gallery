import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10em;
    background: #DFE1E3;
    margin-top: auto;
`

export const StyledContact = styled.div`
    position: absolute;
    width: 40%;
    height: 4em;
    background: #fff;
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
        transition:  all .5s ease-in-out;
    }
    img:hover{
       
        transform: scale(1.2)
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
        font-size: 30px;
        top: 0;
    }
    p{
        position: relative;
        top: 33%;
        font-size: 10px;
    }
`