import { Switch } from 'react-router-dom';

import { StyledNav, Ul, Li, StyledLink } from './StyledNav';
import Slider from '../Slider/Slider'

const images = [
    'https://images.musement.com/cover/0002/13/san-francisco-masterlu-fotolia-com-m-jpg_header-112309.jpeg',
    'https://cdn1.matadornetwork.com/blogs/1/2011/10/Kiev-Ukraine-cityscape-destinations-1200x899.jpg',
    'https://www.washingtonpost.com/resizer/Q3gSZn4URJz_lw1lkyPaUhzjPkY=/arc-anglerfish-washpost-prod-washpost/public/DBLLHPDG5AI6TJUYFKHYBDE47M.jpg'
    
]

export function Nav () {
    return(
        <>
      
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
        <Slider slides={images}/>
        </>
    )
}