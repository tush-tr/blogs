
import { React,useEffect, useState } from "react";
import ImageCard from './imagecard'
import './imageCard.css'
const FetchImages = ()=>{
    function getImages(){
        const url = "https://dog.ceo/api/breed/hound/images";
        setLoading(true);
        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
            const modifiedData = data.message
            setImage(modifiedData)
            setLoading(false);
        })        
    }
    const [images, setImage] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(getImages,[])
    
    if (loading) {
        return <h1>Loading...</h1>;
    }

    return(
        <div className="imageCards">
            {
                images.map((e)=>(
                    <ImageCard url={e} />
                ))
            }
        </div>

    )
}
export default FetchImages