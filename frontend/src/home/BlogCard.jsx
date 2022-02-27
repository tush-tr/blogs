import {React} from 'react'
import './imageCard.css'
const ImageCard = ({title,content,image,blogid})=>{
    const path = `/blogs/#/${blogid}`
    const modifiedContent = content.slice(100,200)
    console.log(modifiedContent)
    return(
        <a href={path} className="imageCard card2" >
            <h2>{title}</h2>
            <img alt="" src={image} />
            <div id="blogSlicedContent" dangerouslySetInnerHTML={ {__html: modifiedContent} } />
        </a>
    )
}
export default ImageCard