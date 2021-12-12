import {React} from 'react'
import './imageCard.css'
const ImageCard = ({url})=>{
    return(
        <div className="imageCard">
            <img alt="" src={url} />
        </div>
    )
}
export default ImageCard