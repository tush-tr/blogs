
import { React,useEffect, useState } from "react";
import ImageCard from './imagecard'
import './imageCard.css'
import './imageCard.scss'
const FetchImages = ()=>{
    function getImages(){
        const url = "https://tush-tr.github.io/vanilla-js-projects/index.json";
        setLoading(true);
        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
            const modifiedData = data.blogs.map((blog)=>{return {title:blog.title,content:blog.content,image:blog.image}})
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
        <div className="imageCards ">
            {
                images.map((e)=>(
                    <ImageCard image={e.image} content={e.content} title={e.title} />
                ))
            }
        </div>

    )
}
export default FetchImages