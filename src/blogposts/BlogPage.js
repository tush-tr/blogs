import { React,useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import './blogpage.css'
const BlogPage = ()=>{
    let { blogId } = useParams();
    console.log(typeof(blogId))
    function getBlogs(){
        const url = "https://tush-tr.github.io/vanilla-js-projects/index.json";
        setLoading(true);
        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
            let modifiedData;
            data.blogs.forEach(blogPost => {
                console.log(blogId)
                if(blogPost.id===blogId){
                    console.log(blogPost)
                    modifiedData = blogPost;
                }
            });
            console.log(modifiedData)
            // const modifiedData = data.blogs[0]
            const newmodifiedData =  {key: modifiedData.id,title:modifiedData.title,content:modifiedData.content,image:modifiedData.image}
            setBlogs(newmodifiedData)
            setLoading(false);
        })        
    }
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(getBlogs,[blogId])
    
    if (loading) {
        return <h1>Loading...</h1>;
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