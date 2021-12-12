import {React} from 'react'
import './imageCard.css'
const ImageCard = ({title,content,image,blogid})=>{
    const path = `/blogs/#/${blogid}`
    const modifiedContent = content.slice(0,200)
    return(
        <a href={path} className="imageCard card2">
            <h1>{title}</h1>
            <img alt="" src={image} />
            <div dangerouslySetInnerHTML={ {__html: modifiedContent} } />
        </a>
    )
}
export default ImageCard