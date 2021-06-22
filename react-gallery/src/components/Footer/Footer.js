import { StyledFooter, StyledContact, Ul, FooterText } from './StyledFooter';
import Instagram from '../../Assets/Social/instagram.png';
import Facebook from '../../Assets/Social/facebook.png';
import YouTube from '../../Assets/Social/youtube.png';
import LinkedIn from '../../Assets/Social/linkedin.png';


const social = [
    {
        image: Instagram,
        link: 'https://www.instagram.com/d_a_n_a_e_c/',
        description:'instagram'
    },
    {
        image: Facebook,
        link: 'https://www.facebook.com/andrey.prasolov.9/',
        description: 'facebook'
    },
    {
        image: YouTube,
        link: 'https://www.youtube.com/channel/UCXZrPJAU0qMqegz0OkwAuLQ',
        description: 'youtube'
    },
    {
        image: LinkedIn,
        link: 'https://www.linkedin.com/in/andrii-prasolov-a3836a126/',
        description: 'linkedin'
    }
]

export function Footer () {
    return(
       <StyledFooter>
           <StyledContact>
            <Ul>
               {
                   social.map((item, i) => {
                       return(
                            <li key={i + 1}><a href={item.link}>
                                <img src={item.image} alt={item.description}/>
                            </a></li>
                       )
                   })
               }
            </Ul>
           </StyledContact>
           <FooterText>
               <p>You can contact with me using my social networks</p>
               <p>©2021 COPYRIGHT PRASOLOV PFOTO</p>
           </FooterText>
       </StyledFooter>
    )
}