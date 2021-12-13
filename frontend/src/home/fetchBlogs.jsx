import { React,useEffect, useState } from "react";
import BlogCard from './BlogCard'
import './imageCard.css'
import './imageCard.scss'
require("dotenv").config();
const FetchImages = ()=>{
    console.log(process.env)
    function getImages(){
        const url = process.env.REACT_APP_APIURL;
        console.log(url)
        setLoading(true);
        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
            const modifiedData = data.map((blog)=>{return {blogid:blog._id,key:blog._id,title:blog.title,content:blog.content,image:blog.image}})
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
    console.log(images)
    
    return(
        <div className="imageCards ">
            {
                images.map((e)=>(
                    <BlogCard blogid={e.blogid} key={e.key} image={e.image} content={e.content} title={e.title} />
                ))
            }
            
        </div>

    )
}
export default FetchImages