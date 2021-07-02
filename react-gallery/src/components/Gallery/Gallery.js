import {  useState, useEffect } from 'react';
import axios from 'axios';
import { Slider } from '../Slider';
import { StyledGroup, GroupItem, GroupTitle, GroupImg, Line, VideoWrapper, Video, VideoTextBlock  } from './StyledGallery';
import { StandartLayout } from '../Layout';

const images = [
    'https://i.pinimg.com/originals/2e/48/ce/2e48ce63e386ab9a056115d5b5c46ed1.jpg',
    'https://wallpaperaccess.com/full/3811544.jpg',
    'https://wallpapershome.com/images/wallpapers/carpathian-mountains-3840x2160-4k-5k-wallpaper-ukraine-europe-travel-7035.jpg',
    'https://images.wallpaperscraft.com/image/ukraine_zakarpatye_falls_river_zhonka_wall_wood_light_shadows_60932_2048x1152.jpg',
    'https://1920x1080hdwallpapers.com/image/201509/city/2153/independence-square-monument-kiev-ukraine-illumination.jpg',
    'https://images.wallpaperscraft.com/image/city_river_bridge_191841_2560x1024.jpg'
]

// const imageGroups = [
//     {
//         photoLink: 'https://i.pinimg.com/originals/2e/48/ce/2e48ce63e386ab9a056115d5b5c46ed1.jpg',
//         groupName: 'city'
//     },
//     {
//         photoLink: 'https://images.wallpaperscraft.com/image/city_river_bridge_191841_2560x1024.jpg',
//         groupName: 'nature'
//     },
//     {
//         photoLink: 'https://images.wallpaperscraft.com/image/city_river_bridge_191841_2560x1024.jpg',
//         groupName: 'alt'
//     },
//     {
//         photoLink: 'https://i.pinimg.com/originals/2e/48/ce/2e48ce63e386ab9a056115d5b5c46ed1.jpg',
//         groupName: 'history'
//     },
// ]

export function Gallery () {

    const [state, setState] = useState()

    useEffect(()=>{
        axios.get('https://react-gallery-7e1d5-default-rtdb.firebaseio.com/categories.json').then(responce => { 
            setState(responce.data)
        })
        
    },[])

    if(!state) return null

    return(
        <>
            <Slider slides={images} autoPlay={5}/>
            <StyledGroup>
                {  
                    state.map((item, i) => {

                        return (
                            <GroupItem to={{
                                pathname: '/photos',
                                state: {
                                    name: item.name,
                                    photoLink:item.photos
                                }
                            }} key={i + 1}>
                                <GroupImg src={item.photos[0].photoLink} alt={item.name}/> 
                                <GroupTitle>{item.name}</GroupTitle>
                            </GroupItem>
                        )
                    })
                }
            </StyledGroup>
            <Line/>
            <VideoWrapper>
                <Video>
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/64Kjey-KxeY?mute=1&autoplay=1&fs=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <VideoTextBlock >
                    <h2>Best of 2020</h2>
                    <p>Please subscribe to my youtube channel</p>
                </VideoTextBlock>
                </Video>
            </VideoWrapper>
            <StandartLayout/>
        </>
    )
}