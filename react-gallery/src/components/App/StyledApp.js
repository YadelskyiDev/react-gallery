import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    html{
        width:100%;
        height: 100%;
    }
    body{
        width: 100%;
        height: 100;
        font-family: Verdana, Arial, Helvetica, sans-serif;
    }
`;

export  const MainPageStyle = styled.div`
    margin: 0;
    padding: 0, 25%;
`;