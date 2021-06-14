import { Slider } from '../Slider/Slider';
import { StyledGroup, GroupItem, GroupTitle, GroupImg, Line } from './StyledGallery';


const images = [
    'https://i.pinimg.com/originals/2e/48/ce/2e48ce63e386ab9a056115d5b5c46ed1.jpg',
    'https://wallpaperaccess.com/full/3811544.jpg',
    'https://wallpapershome.com/images/wallpapers/carpathian-mountains-3840x2160-4k-5k-wallpaper-ukraine-europe-travel-7035.jpg',
    'https://images.wallpaperscraft.com/image/ukraine_zakarpatye_falls_river_zhonka_wall_wood_light_shadows_60932_2048x1152.jpg',
    'https://1920x1080hdwallpapers.com/image/201509/city/2153/independence-square-monument-kiev-ukraine-illumination.jpg',
    'https://images.wallpaperscraft.com/image/city_river_bridge_191841_2560x1024.jpg'
]

const imageGroups = [
    {
        photoLink: 'https://i.pinimg.com/originals/2e/48/ce/2e48ce63e386ab9a056115d5b5c46ed1.jpg',
        altName: 'altCity',
        groupName: 'city'
    },
    {
        photoLink: 'https://images.wallpaperscraft.com/image/city_river_bridge_191841_2560x1024.jpg',
        altName: 'altNature',
        groupName: 'nature'
    },
    {
        photoLink: 'https://images.wallpaperscraft.com/image/city_river_bridge_191841_2560x1024.jpg',
        altName: 'altAlt',
        groupName: 'alt'
    },
    {
        photoLink: 'https://i.pinimg.com/originals/2e/48/ce/2e48ce63e386ab9a056115d5b5c46ed1.jpg',
        altName: 'altHistory',
        groupName: 'history'
    },
]

export function Gallery () {
    return(
        <>
            <Slider slides={images} autoPlay={5}/>
           
            <StyledGroup>
                {
                    imageGroups.map((item, i) => {
                        return (
                            <>
                                <GroupItem key={i}>
                                    <GroupImg src={item.photoLink} alt={item.groupName} key={item.altHistory}/> 
                                    <GroupTitle key={item.groupName}>{item.groupName}</GroupTitle>
                                </GroupItem>
                            </>
                        )
                    })
                }
            </StyledGroup>
            <Line/>
        </>
    )
}