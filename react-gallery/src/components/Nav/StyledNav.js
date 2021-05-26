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
    `;

export const Li = styled.li`
    list-style-type: none;
    &:hover{
        transform: scale(1.1);
    }
`;

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({activeClassName})`
    user-select: none;   
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 10px;
    &.${activeClassName}{
        border-bottom: 1px solid black;
        font-weight: bolder;
        padding-bottom: 8px;
    }
`;