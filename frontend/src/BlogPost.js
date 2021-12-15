import BlogPage from './blogposts/BlogPage'
import { React, useEffect, useState } from "react";
import Header from './home/header'
import BlogList from './home/fetchBlogs'
import Fuse from "fuse.js";
const BlogPost = () => {
    function getImages() {
        const url = process.env.REACT_APP_APIURL;
        setLoading(true);
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            const modifiedData = data.map((blog) => { return { blogid: blog._id, key: blog._id, title: blog.title, content: blog.content, image: blog.image } })
            setImage(modifiedData)
            setData(modifiedData)
            setLoading(false);
        })
    }
    const [blogs, setImage] = useState([]);
    const [data, setData] = useState(blogs);
    const [loading, setLoading] = useState(false);
    useEffect(getImages, [])
    const searchData = (query) => {
        if (!query) {
            setData(blogs);
            return;
        }
        const fuse = new Fuse(data, {
            keys: ["title", "content"],
        });
        const result = fuse.search(query);
        const finalResult = [];
        if (result.length) {
            result.forEach((item) => {
                finalResult.push(item.item);
            });
            setData(finalResult);
        } else {
            setData([]);
        }
    };
    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="blogPageIntro">
            <Header searchData={searchData} />
                <BlogPage />
                <BlogList blogs={data} />
        </div>
    )
}
export default BlogPost;