import { StyledFooter, StyledContact, Ul, Img, Li, A } from './StyledFooter';


const social = [
    {
        image: '../../Assets/Social/instagram.png',
        link: 'https://www.instagram.com/',
        description:'instagram'
    },
    {
        image: '../../Assets/Social/facebook.png',
        link: 'https://uk-ua.facebook.com/',
        description: 'facebook'
    },
    {
        image: '../../Assets/Social/youtube.png',
        link: 'https://www.youtube.com/channel/UCXZrPJAU0qMqegz0OkwAuLQ',
        description: 'youtube'
    }
]

export function Footer () {
    return(
       <StyledFooter>
           <StyledContact>
            <Ul>
               {
                   social.map(item => {
                       console.log(item.image)
                       return(
                        
                            <Li><A href={item.link}>
                                <Img src={`${item.image}`} alt={item.description}/>
                            </A></Li>
                        
                       )
                   })
               }
            </Ul>
           </StyledContact>
       </StyledFooter>
    )
}