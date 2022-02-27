import { React,useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import Loading from '../loading/blog'
import './blogpage.css'
require("dotenv").config();
const BlogPage = ()=>{
    let { blogId } = useParams();
    console.log(typeof(blogId))
    function getBlogs(){
        const url = `${process.env.REACT_APP_APIURL}/${blogId}`;
        setLoading(true);
        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
            let modifiedData = data;
            const newmodifiedData =  {key: modifiedData.id,title:modifiedData.title,content:modifiedData.content,image:modifiedData.image}
            setBlogs(newmodifiedData)
            
            setLoading(false);
        })        
    }
    const [blogs, setBlogs] = useState([]);
    
    const [loading, setLoading] = useState(false);
    useEffect(getBlogs,[blogId])
    
    

    if (loading) {
        return <Loading />;
    }
    return(
        
            
        <div className="blogPostPage">
            <h1 className="BlogTitle">{blogs.title}</h1>
            <div className="blogImageContainer" >
            <img className="blogImage" src={blogs.image} alt="" />
            </div>
            <div dangerouslySetInnerHTML={ {__html: blogs.content} } />
        </div>
        
    )
}
export default BlogPage;