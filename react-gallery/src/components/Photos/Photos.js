import { useLocation } from 'react-router';
import { StandartLayout } from '../Layout';
import { ImageWrapper, StyledImage } from './StyledPhotos';

export const Photos = (props) => {
    const location = useLocation();
    const { name, photoLink } = location.state;
    console.log(name, photoLink)

   return(
    <>
        <ImageWrapper>
            {
                photoLink.map((item, i) => {
                    return(
                        <StyledImage src={item.photoLink} alt={item.description} key={i + 1}/>
                    )
                })
            }
        </ImageWrapper>
        <StandartLayout/>
    </>
 

   )
}