import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 25vh;
`;

export const Ul = styled.ul`
    display:flex;
    align-items: center;
    justify-content: space-between;
    `;

export const Li = styled.li`
    list-style-type: none;
    margin: 0 20px;
`;

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({activeClassName})`
    user-select: none;   
    color: black;
    -webkit-text-stroke: .8px rgba(0,0,0,0.5);
    -webkit-text-fill-color: white;
    text-transform: uppercase;
    font-size: 1.5em;
    text-decoration: none;
    padding: 8px 0;
    &.${activeClassName}{
        border-bottom: 1px solid black;
    }
    &:hover{
        border-bottom: 1px solid black;
    }
`;