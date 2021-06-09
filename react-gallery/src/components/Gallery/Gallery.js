import { Slider } from '../Slider/Slider'


const images = [
    'https://i.pinimg.com/originals/2e/48/ce/2e48ce63e386ab9a056115d5b5c46ed1.jpg',
    'https://wallpaperaccess.com/full/3811544.jpg',
    'https://wallpapershome.com/images/wallpapers/carpathian-mountains-3840x2160-4k-5k-wallpaper-ukraine-europe-travel-7035.jpg'
    
]

export function Gallery () {
    return(
        <>
            <Slider slides={images} autoPlay={5}/>
            <h1>Gallery</h1>
        </>
    )
}