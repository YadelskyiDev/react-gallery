import { Switch } from 'react-router-dom';

import { StyledNav, Ul, Li, StyledLink } from './StyledNav';

export function Nav () {
    return(
        <Switch>
            <StyledNav>
                <Ul>
                    <Li>
                        <StyledLink to="/contact">Contact</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink exact to="/">Gallery</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/about">About</StyledLink>
                    </Li>
                </Ul>  
            </StyledNav>
        </Switch>
    )
}