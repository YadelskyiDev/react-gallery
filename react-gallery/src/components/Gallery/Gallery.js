import { Slider } from '../Slider/Slider'


const images = [
    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://cdn1.matadornetwork.com/blogs/1/2011/10/Kiev-Ukraine-cityscape-destinations-1200x899.jpg',
    'https://www.washingtonpost.com/resizer/Q3gSZn4URJz_lw1lkyPaUhzjPkY=/arc-anglerfish-washpost-prod-washpost/public/DBLLHPDG5AI6TJUYFKHYBDE47M.jpg'
    
]

export function Gallery () {
    return(
        <>
            <Slider slides={images} autoPlay={5}/>
            <h1>Gallery</h1>
        </>
    )
}